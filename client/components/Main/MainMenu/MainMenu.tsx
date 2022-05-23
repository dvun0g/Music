import { FC } from "react";
import MainMenuLink from "../../UI/Main/MainMenuLink/MainMenuLink";

import styles from './MainMenu.module.scss';

import songs from '../../../assets/img/Main/music.svg';
import heart from '../../../assets/img/Main/heart.svg';
import upload from '../../../assets/img/Main/upload.svg';
import MainMenuCircle from "../../UI/Main/MainMenuCircle/MainMenuCircle";

const MainMenu: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.BlockLink}>
                <MainMenuLink icon={songs} text="Songs" href="/songs"/>
                <MainMenuLink icon={heart} text="Wishlist" href="/whishlist"/>
                <MainMenuLink icon={upload} text="Upload" href="/upload"/>
            </div>
            <div className={styles.BlockCircle}>
                <MainMenuCircle color='v'/>
                <MainMenuCircle color='a'/>
                <MainMenuCircle color='r'/>
            </div>
        </div>
    )
}

export default MainMenu;