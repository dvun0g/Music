import AuthService from "../service/authService.js";

class AuthController {
    async registration(req, res) {
        try {
            const {name, email, password} = req.body
            const userData = await AuthService.registration(name, email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userData)
        } catch (e) {
            res.status(400).json({message: `Произошла ошибка при регистрации - ${e}`})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const userData = await AuthService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userData)
        } catch (e) {
            res.status(400).json({message: `Произошла ошибка при логине - ${e}`})
        }
    }

    async logout(req, res) {
        try {
            const {refreshToken} = req.cookies
            const deleteToken = await AuthService.logout(refreshToken)
            res.clearCookie('refreshToken')
            res.json(deleteToken)
        } catch (e) {
            res.status(400).json({message: `Произошла ошибка при выходе из аккаунт - ${e}`})
        }
    }

    async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies
            const userData = await AuthService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json(userData)
        } catch (e) {
            console.log(e)
            res.status(400).json({message: `Произошла ошибка при обновление токена - ${e}`})
        }
    }
}

export default new AuthController();