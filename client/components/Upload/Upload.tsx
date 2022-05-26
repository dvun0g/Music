import { FC } from "react";

import UploadFiles from "../UI/Upload/UploadFiles/UploadFiles";
import UploadInput from "../UI/Upload/UploadInput/UploadInput";

import styles from './Upload.module.scss';

const Upload: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.BlockText}>
                <div className={styles.Title}>Here you can download music</div>
                <div className={styles.Descr}>You need to upload a photo, track, title and author</div>
            </div>
            <div className={styles.BlockFile}>
                <UploadFiles text="🖼️" type="i" className={styles.File}/>
                <UploadFiles text="🎶" type="a" className={styles.File}/>
            </div>
            <div className={styles.BlockInput}>
                <UploadInput placeholder="Author"/>
                <UploadInput placeholder="Name Song"/>
                <button className={styles.Btn}>
                    Save Song
                </button>
            </div>
        </div>
    )
}

export default Upload;