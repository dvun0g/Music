import { FC, useEffect } from "react";
import cn from 'classnames';
import Image from "next/image";


import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { MainSongProps } from "./MainSong.types";

import styles from './MainSong.module.scss';

const MainSong: FC<MainSongProps> = ({_id,
                                      title, 
                                      author, 
                                      img,
                                      className,
                                      song, 
                                      ...props}) => {
    const {activeSong} = useTypedSelector(state => state.song)
    const {songSetActive} = useActions()
    
    const handlePlay = () => {
        songSetActive(_id)
    }

    return (
        <div 
         className={cn(className, styles.Container, {
             [styles.Active]: _id === activeSong?._id,
         })} 
         onClick={handlePlay}
         {...props}>
             <div className={styles.Image}><Image src={`http://localhost:8000/img/${img}`} width={50} height={50} /></div>
             <div className={styles.BlockText}>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Author}>{author}</div>
             </div>
        </div>
    )
}

export default MainSong;