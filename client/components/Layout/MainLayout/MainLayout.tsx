import { FC } from "react";

import { MainLayoutProps } from "./MainLayout.types";

import Header from "../../Main/Header/Header";
import MainMenu from "../../Main/MainMenu/MainMenu";
import MainSongs from "../../Main/MainSongs/MainSongs";

import styles from './MainLayout.module.scss';
const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <div className={styles.Container}>
            <Header />
            <MainMenu />
            {children}
            <MainSongs />
        </div>
    )
}

export default MainLayout;