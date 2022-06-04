import { FC } from "react";
import cn from 'classnames';

import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { MainSongProps } from "./MainSong.types";
import { ISong } from "../../../../redux/reducers/Song/SongReducer.types";

import styles from './MainSong.module.scss';

import heartImg from '../../../../assets/img/Main/heart.svg';

const MainSong: FC<MainSongProps> = ({_id,
                                      title, 
                                      author, 
                                      img,
                                      className,
                                      wishlist,
                                      song, 
                                      ...props}) => {
    const {activeSong} = useTypedSelector(state => state.song)
    const {songSetActive, songUpdate} = useActions()
    
    const handlePlay = () => {
        _id && songSetActive(_id)
    }

    const handlerUpdate = () => {
        const updatedSong: ISong = {
            _id: _id,
            name: title,
            author: author,
            image: img,
            audio: song,
            wishlist: !wishlist,
        }
        songUpdate(updatedSong)
    }

    return (
        <div 
         className={cn(className, styles.Container, {
             [styles.Active]: _id === activeSong?._id,
         })} 
         onClick={handlePlay}
         {...props}>
             <div className={styles.Image}>
                 <img
                  src={`http://localhost:8000/img/${img}`} />
            </div>
             <div className={styles.BlockText}>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Author}>{author}</div>
             </div>
             <img
              className={cn(styles.Heart, {
                [styles.Wishlist]: wishlist})}
              onClick={handlerUpdate} 
              src={heartImg} />
        </div>
    )
}

export default MainSong;