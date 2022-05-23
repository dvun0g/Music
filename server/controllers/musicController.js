import MusicService from "../service/musicService.js"

class MusicController {
    async create (req, res) {
        try {
            const createdMusic = await MusicService.create(req.body, req.files.music, req.files.image)
            res.json(createdMusic)
        } catch (e) {
            res.status(400).json({message: `Error Music Create - ${e}`})
        }
    }
    
    async getOne (req, res) {
        try {
            const music = await MusicService.getOne(req.params.id)
            res.json(music)
        } catch (e) {
            res.status(400).json({message: `Error Music getOne - ${e}`})   
        }
    }

    async getAll (req, res) {
        try {
            const music = await MusicService.getAll()
            res.json(music)
        } catch (e) {
            res.status(400).json({message: `Error Music getAll - ${e}`})
        }
    }

    async update (req, res) {
        try {
            const updatedMusic = await MusicService.update(req.parama.id, req.body)
            res.json(updatedMusic)
        } catch (e) {
            res.status(400).json({message: `Error Music Update - ${e}`})
            
        }
    }

    async delete (req, res) {
        try {
            const deletedMusic = await MusicService.delete(req.params.id)
            res.json(deletedMusic)
        } catch (e) {
            res.status(400).json({message: `Error Music Delete - ${e}`})            
        }
    }
}

export default new MusicController();