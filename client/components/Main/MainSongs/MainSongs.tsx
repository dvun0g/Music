import { FC } from "react";
import MainSong from "../../UI/Main/MainSong/MainSong";

import styles from './MainSongs.module.scss';

import imgSong01 from '../../../assets/img/Main/song-img.jpg';

const MainSongs: FC = () => {
    return (
        <div className={styles.Container}>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01} active={true}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
            <MainSong title="Estheras" author="Arlene McCoy" img={imgSong01}/>
        </div>
    )
}

export default MainSongs;