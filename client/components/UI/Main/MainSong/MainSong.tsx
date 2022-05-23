import { FC } from "react";
import cn from 'classnames';
import Image from "next/image";

import { MainSongProps } from "./MainSong.types";

import styles from './MainSong.module.scss';


const MainSong: FC<MainSongProps> = ({title, author, img, active=false, className, ...props}) => {
    return (
        <div 
         className={cn(className, styles.Container, {
             [styles.Active]: active,
         })} 
         {...props}>
             <div className={styles.Image}><Image src={img} width={50} height={50} /></div>
             <div className={styles.BlockText}>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Author}>{author}</div>
             </div>
        </div>
    )
}

export default MainSong;