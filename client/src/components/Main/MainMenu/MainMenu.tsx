import { FC } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router-dom";

import MainMenuLink from "../../UI/Main/MainMenuLink/MainMenuLink";

import styles from './MainMenu.module.scss';

import heart from '../../../assets/img/Main/heart.svg';
import upload from '../../../assets/img/Main/upload.svg';
import MainMenuCircle from "../../UI/Main/MainMenuCircle/MainMenuCircle";

const MainMenu: FC = () => {
    const {wishlist} = useTypedSelector(state => state.song)
    const {songAddWishlist, songDelWishlist, songRemoveActive} = useActions()
    
    const navigate = useNavigate()

    const handlerWishlist = () => {
        if (wishlist.length) {
            songDelWishlist()
        } else {
            songAddWishlist()
        }
    }

    const handlerUpload = () => {
        new Promise((resolve, reject) => resolve(songRemoveActive())).then(() => navigate('/upload'))
    }
    
    return (
        <div className={styles.Container}>
            <div className={styles.BlockLink}>
                <MainMenuLink 
                 icon={heart} 
                 text="Wishlist"
                 color={wishlist.length ? 'r' : 'b'} 
                 href="/"
                 onClick={handlerWishlist}/>
                <MainMenuLink 
                 icon={upload} 
                 text="Upload" 
                 href="/"
                 onClick={handlerUpload}/>
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