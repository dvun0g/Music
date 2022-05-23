import path from 'path';
import * as uuid from 'uuid';

class FileService {
    saveFile(file, type) {
        try {
            const expansion = `.${file.name.split('.').pop()}`
            switch(type) {
                case 'image':
                    const imgName = uuid.v4() + expansion
                    const imgPath = path.resolve('static', 'img', imgName)
                    console.log(imgPath)
                    file.mv(imgPath)
                    return imgName
                case 'audio':
                    const audioName = uuid.v4() + expansion
                    const audioPath = path.resolve('static', 'audio', audioName)
                    file.mv(audioPath)
                    return audioName
                default:
                    throw new Error('Ошибка при загрузке файла - не передан атрибут type')
            }
        } catch (e) {
            throw new Error(`Ошибка при загрузке файла - ${e}`)   
        }
    }
}

export default new FileService();