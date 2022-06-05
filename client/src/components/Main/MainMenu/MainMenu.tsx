import { FC } from "react";
import cn from 'classnames';

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router-dom";

import MainMenuLink from "../../UI/Main/MainMenuLink/MainMenuLink";
import MainMenuCircle from "../../UI/Main/MainMenuCircle/MainMenuCircle";

import styles from './MainMenu.module.scss';

import heart from '../../../assets/img//heart.svg';
import upload from '../../../assets/img//upload.svg';
import close from '../../../assets/img//close.svg';

const MainMenu: FC = () => {
    const {wishlist} = useTypedSelector(state => state.song)
    const {activeMenu} = useTypedSelector(state => state.common)
    const {songAddWishlist, 
           songDelWishlist, 
           songRemoveActive, 
           activeMenuChange} = useActions()
    
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

    const handleActiveMenu = () => {
        activeMenuChange(false)
    }
    
    return (
        <div className={cn(styles.Container, {
            [styles.Active]: activeMenu})}>
            <img 
             className={styles.Close}
             onClick={handleActiveMenu}
             src={close} 
             alt="" />
            <div className={styles.BlockLink}>
                <MainMenuLink 
                 icon={heart} 
                 text="Wishlist"
                 color={wishlist.length ? 'r' : 'b'} 
                 href=" "
                 onClick={handlerWishlist}/>
                <MainMenuLink 
                 icon={upload} 
                 text="Upload" 
                 href=" "
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