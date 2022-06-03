import { ChangeEvent, FC, useState } from "react";
import cn from 'classnames';

import { useActions } from "../../hooks/useActions";
import useInput from "../../hooks/useInput";

import UploadFiles from "../UI/Upload/UploadFiles/UploadFiles";
import UploadInput from "../UI/Upload/UploadInput/UploadInput";

import { CreateSongType } from "./Upload.types";

import styles from './Upload.module.scss';

const Upload: FC = () => {
    const {songCreate} = useActions()
    const [song, setSong] = useState<CreateSongType>({name: '', author: '', audio: '', image: ''})

    const nameInput = useInput('', {isEmpty: true})
    const authorInput = useInput('', {isEmpty: true})

    const handlerName = (e: ChangeEvent<HTMLInputElement>) => {
        nameInput.onChange(e)
        setSong({...song, name: nameInput.value})
    }

    const handlerAuthor = (e: ChangeEvent<HTMLInputElement>) => {
        authorInput.onChange(e)
        setSong({...song, author: authorInput.value})
    }

    const handlerAudio = (fileAudio: File) => {
        setSong({...song, audio: fileAudio})
    }

    const handlerImage = (fileImage: File) => {
        setSong({...song, image: fileImage})
    }

    const buttonDisabled = !nameInput.isValidInput || !authorInput.isValidInput || !song.audio || !song.image

    const handlerCreateSong = () => {
        const createSong = new FormData()
        createSong.set('name', nameInput.value)
        createSong.set('author', authorInput.value)
        createSong.set('audio', song.audio)
        createSong.set('image', song.image)

        songCreate(createSong)

        nameInput.setValue('')
        nameInput.setDirty(false)
        authorInput.setValue('')
        authorInput.setDirty(false)
        setSong({name: '', author: '', audio: '', image: ''})
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
                {authorInput.isDirty && authorInput.isEmpty
                                   && <div className={styles.Error}>The field cannot be empty</div>}
                
                <UploadInput 
                 placeholder="Author"
                 value={authorInput.value}
                 onChange={handlerAuthor}
                 onBlur={authorInput.onBlur}
                 />
                
                {nameInput.isDirty && nameInput.isEmpty
                                     && <div className={styles.Error}>The field cannot be empty</div>}
                
                <UploadInput 
                 placeholder="Name Song"
                 value={nameInput.value}
                 onChange={handlerName}
                 onBlur={nameInput.onBlur}
                 />
                <button 
                 className={cn(styles.Btn, {
                     [styles.Disabled]: buttonDisabled,
                     [styles.Active]: !(buttonDisabled),
                 })}
                 disabled={buttonDisabled}
                 onClick={handlerCreateSong}>
                    Upload Song
                </button>
            </div>
        </div>
    )
}

export default Upload;