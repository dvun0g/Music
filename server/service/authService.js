import bcrypt from 'bcrypt';

import UserModel from "../models/userModel.js";
import TokenService from './tokenService.js';

class AuthService {
    async registration(name, email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw new Error('Ошибка при регистрации - такой пользователь уже существует')
        } 
        const hashPassword = bcrypt.hashSync(password, 7)
        const user = await UserModel.create({name, email, password: hashPassword})
        
        const {_id} = user
        const tokens = TokenService.createTokens({_id, name, email})
        await TokenService.saveToken(user._id, tokens.refreshToken)

        return {
            ...tokens,
            user: user,
        }
    }

    
    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw new Error('Ошибка при логине - пользователя с такой почтой нет')
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            throw new Error('Ошибка при логине - неправильный пароль')
        }
        const {_id, name} = {...user}
        
        const tokens = TokenService.createTokens({_id, email, name})
        await TokenService.saveToken(_id, tokens.refreshToken)
        return {
            tokens,
            user: user,
        }
    }
    
    async logout(refreshToken) {
        const deleteToken = await TokenService.removeToken(refreshToken)
        return deleteToken
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw new Error('Произошла ошибка при обновление токена - пользователь не авторизирован')
        }
        const userData = TokenService.validRefreshToken(refreshToken)
        const tokenDB = await TokenService.findToken(refreshToken)

        if (!userData || !tokenDB) {
            throw new Error('Произошла ошибка при обновление токена - пользователь не авторизирован')
        }

        const user = await UserModel.findById(userData._id)
        const {name, email, _id} = user
        const tokens = TokenService.createTokens({name, email, _id})
        await TokenService.saveToken(_id, tokens.refreshToken)
        return {
            tokens,
            user: user,
        }
    }
}

export default new AuthService();