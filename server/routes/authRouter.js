import { Router } from "express";

import AuthController from "../controllers/authController.js";


const authRouter = new Router()

authRouter.post('/registration', AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', AuthController.logout)
authRouter.get('/refresh', AuthController.refresh)
// authRouter.get('/user')

export default authRouter;