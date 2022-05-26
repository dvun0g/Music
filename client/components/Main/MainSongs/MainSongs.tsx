import { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import MainSong from "../../UI/Main/MainSong/MainSong";

import styles from './MainSongs.module.scss';

const MainSongs: FC = () => {
    const {songs, error, loading, wishlist} = useTypedSelector(state => state.song)

    return (
        <div className={styles.Container}>
            {songs && !wishlist.length  ? songs.map(song => (
                <MainSong 
                 key={song._id} 
                 _id={song._id} 
                 title={song.name} 
                 author={song.author} 
                 img={song.image} 
                 song={song.audio}
                 wishlist={song.wishlist}/>
            )) : wishlist.map(song => (
                <MainSong 
                 key={song._id} 
                 _id={song._id} 
                 title={song.name} 
                 author={song.author} 
                 img={song.image} 
                 song={song.audio}
                 wishlist={song.wishlist}/>
            ))}
        </div>
    )
}

export default MainSongs;