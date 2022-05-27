import { ChangeEvent, FC, useState } from "react";

import { useActions } from "../../hooks/useActions";

import UploadFiles from "../UI/Upload/UploadFiles/UploadFiles";
import UploadInput from "../UI/Upload/UploadInput/UploadInput";

import { CreateSongType } from "./Upload.types";

import styles from './Upload.module.scss';

const Upload: FC = () => {
    const {songCreate} = useActions()
    const [song, setSong] = useState<CreateSongType>({name: '', author: '', audio: '', image: ''})

    const handlerAuthor = (e: ChangeEvent<HTMLInputElement>) => {
        setSong({...song, author: e.target.value})
    }

    const handlerName = (e: ChangeEvent<HTMLInputElement>) => {
        setSong({...song, name: e.target.value})
    }
    
    const handlerAudio = (fileAudio: File) => {
        setSong({...song, audio: fileAudio})
    }

    const handlerImage = (fileImage: File) => {
        setSong({...song, image: fileImage})
    }

    const handlerCreateSong = () => {
        const createSong = new FormData()
        createSong.append('name', song.name)
        createSong.append('author', song.author)
        createSong.append('audio', song.audio)
        createSong.append('image', song.image)
        setSong({name: '', author: '', audio: '', image: ''})
        songCreate(createSong)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.BlockText}>
                <div className={styles.Title}>Here you can download music</div>
                <div className={styles.Descr}>You need to upload a photo, track, title and author</div>
            </div>
            <div className={styles.BlockFile}>
                <UploadFiles 
                 text="🖼️" 
                 type="i" 
                 className={styles.File}
                 file={song.image}
                 uploadFiles={handlerImage}/>
                <UploadFiles 
                 text="🎶" 
                 type="a" 
                 className={styles.File}
                 file={song.audio}
                 uploadFiles={handlerAudio}/>
            </div>
            <div className={styles.BlockInput}>
                <UploadInput 
                 placeholder="Author"
                 value={song.author}
                 onChange={handlerAuthor}
                 />
                <UploadInput 
                 placeholder="Name Song"
                 value={song.name}
                 onChange={handlerName}/>
                <button 
                 className={styles.Btn}
                 onClick={handlerCreateSong}>
                    Upload Song
                </button>
            </div>
        </div>
    )
}

export default Upload;