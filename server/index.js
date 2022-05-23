import express from "express";
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from "cookie-parser";

import mongoose from "mongoose";

import { config } from "dotenv";

import musicRouter from "./routes/musicRouter.js";
import authRouter from "./routes/authRouter.js";

config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload())
app.use(express.static('static'))

app.use('/music', musicRouter)
app.use('/auth', authRouter)

const start = async () => {
    await mongoose.connect(process.env.URL_DB)
    app.listen(PORT, () => console.log(`Server started on PORT - ${PORT}...`))
}

start()