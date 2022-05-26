import { FC } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

import MainMenuLink from "../../UI/Main/MainMenuLink/MainMenuLink";

import styles from './MainMenu.module.scss';

import songs from '../../../assets/img/Main/music.svg';
import heart from '../../../assets/img/Main/heart.svg';
import upload from '../../../assets/img/Main/upload.svg';
import MainMenuCircle from "../../UI/Main/MainMenuCircle/MainMenuCircle";

const MainMenu: FC = () => {
    const {wishlist} = useTypedSelector(state => state.song)
    const {songAddWishlist, songDelWishlist} = useActions()

    const handlerWishlist = () => {
        if (wishlist.length) {
            songDelWishlist()
        } else {
            songAddWishlist()
        }
    }

    return (
        <div className={styles.Container}>
            <div className={styles.BlockLink}>
                <MainMenuLink 
                 icon={songs} 
                 text="Songs" 
                 href="/songs"/>
                <MainMenuLink 
                 icon={heart} 
                 text="Wishlist"
                 color={wishlist.length ? 'r' : 'b'} 
                 href="/"
                 onClick={handlerWishlist}/>
                <MainMenuLink 
                 icon={upload} 
                 text="Upload" 
                 href="/upload"/>
            </div>
            <div className={styles.BlockCircle}>
                <MainMenuCircle color='v'/>
                <MainMenuCircle color='w'/>
                <MainMenuCircle color='a'/>
                <MainMenuCircle color='r'/>
            </div>
        </div>
    )
}

export default MainMenu;