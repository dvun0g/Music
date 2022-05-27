import { FC, useEffect } from "react";
import cn from 'classnames';

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

import Header from "../../Header/Header";
import MainMenu from "../../Main/MainMenu/MainMenu";
import MainSongs from "../../Main/MainSongs/MainSongs";

import { MainLayoutProps } from "./MainLayout.types";

import styles from './MainLayout.module.scss';

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const {color} = useTypedSelector(state => state.theme)
    const {themeChange} = useActions()

    useEffect(() => {
        const themeColor = localStorage.getItem('theme')
        if (themeColor === 'w' 
            || themeColor === 'r' 
            || themeColor === 'a' 
            || themeColor === 'v') {
            themeChange(themeColor)
        }
    }, [])
    
    return (
        <div className={cn(styles.Container, {
            [styles.White]: color === 'w',
            [styles.Azure]: color === 'a',
            [styles.Vinous]: color === 'v',
            [styles.Red]: color === 'r',
        })}>
            <Header />
            <MainMenu />
            {children}
            <MainSongs />
        </div>
    )
}

export default MainLayout;