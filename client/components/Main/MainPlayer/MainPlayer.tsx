import { FC } from "react";
import MainCollection from "../../UI/Main/MainCollection/MainCollection";

import MainPlayerMenu from "../../UI/Main/MainPlayerMenu/MainPlayerMenu";

import styles from './MainPlayer.module.scss';

const MainPlayer: FC =() => {
    return (
        <div className={styles.Container}>
            <div className={styles.BlockTitle}>
                <div className={styles.Title}>A music platform where you can add your tracks, I wish you a good time.</div>
            </div>
            <MainPlayerMenu />
            <MainCollection title='01' tags={['Classical', 'Music','Collection']}/>
            <MainCollection title='01' tags={['Classical', 'Music','Collection']}/>
        </div>
    )
}

export default MainPlayer;