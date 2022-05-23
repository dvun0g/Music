import jsonwebtoken from "jsonwebtoken";
import TokenModel from "../models/TokenModel.js";

class TokenService {
    createTokens(payload) {
        const accessToken = jsonwebtoken.sign(payload, process.env.SECRET_TOKEN_ACCESS, {expiresIn: '15m'})
        const refreshToken = jsonwebtoken.sign(payload, process.env.SECRET_TOKEN_REFRESH, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken,
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }

        const token = await TokenModel.create({user: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const deletedToken = await TokenModel.deleteOne({refreshToken})
        return deletedToken
    }

    async findToken(refreshToken) {
        const tokenData = await TokenModel.findOne({refreshToken})
        return tokenData
    }
    
    validAccessToken(accessToken) {
        try {
            const userData = jsonwebtoken.verify(accessToken, process.env.SECRET_TOKEN_ACCESS)
            return userData
        } catch (e) {
            return null
        }
    }

    validRefreshToken(refreshToken) {
        try {
            const userData = jsonwebtoken.verify(refreshToken, process.env.SECRET_TOKEN_REFRESH)
            return userData
        } catch (e) {
            return null
        }
    }
}

export default new TokenService();