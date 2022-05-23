import { Router } from "express";

import MusicController from "../controllers/musicController.js";


const musicRouter = new Router()

musicRouter.get('', MusicController.getAll)
musicRouter.get('/:id', MusicController.getOne)
musicRouter.post('', MusicController.create)
musicRouter.put('/:id', MusicController.update)
musicRouter.delete('/:id', MusicController.delete)

export default musicRouter;