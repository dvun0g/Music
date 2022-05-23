import { FC } from "react";
import cn from 'classnames';

import { MainLayoutProps } from "./MainLayout.types";

import Header from "../../Main/Header/Header";
import MainMenu from "../../Main/MainMenu/MainMenu";
import MainSongs from "../../Main/MainSongs/MainSongs";

import styles from './MainLayout.module.scss';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const {color} = useTypedSelector(state => state.theme)

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