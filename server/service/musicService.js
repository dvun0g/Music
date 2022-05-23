import MusicModel from "../models/musicModel.js";
import FileService from "./fileService.js";

class MusicService {
    async create (music, audioFile, imageFile) {
        const audioName = FileService.saveFile(audioFile, 'audio')
        const imageName = FileService.saveFile(imageFile, 'image')
        const createdMusic = await MusicModel.create({...music, audio: audioName, image: imageName})
        return createdMusic 
    }
    
    async getOne (id) {
        if (!id) {
            throw new Error('Неправильный id - get Music')
        }
        const music = await MusicModel.findById(id)
        return music
    }

    async getAll () {
        const musicAll = await MusicModel.find()
        return musicAll
    }

    async update (id, music) {
        if (!id) {
            throw new Error('Неправильный id - update Music')
        }
        const updatedMusic = await MusicModel.findByIdAndUpdate(id, music, {new: true})
        return updatedMusic
    }

    async delete (id) {
        if (!id) {
            throw new Error('Неправильный id - delete Music')
        }
        const deletedMusic = await MusicModel.findByIdAndDelete(id)
        return deletedMusic
    }
}

export default new MusicService();