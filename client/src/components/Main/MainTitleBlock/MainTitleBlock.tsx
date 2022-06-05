import { FC } from "react";

import styles from './MainTitleBlock.module.scss';

import github from '../../../assets/img//github.svg';
import telegram from '../../../assets/img//telegram.svg';

const MainTitleBlock: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Block}>
                <div className={styles.Title}>Feel The Music</div>
                <div className={styles.Desrc}>A music platform where you can upload your track!</div>
            </div>
            <div className={styles.Block}>
                <div className={styles.Title}>Our Contacts</div>
                <div className={styles.BlockImage}>
                    <img src={github} alt="Github Icon" />
                    <img src={github} alt="Github Icon" />
                    <img src={github} alt="Github Icon" />
                    <img src={github} alt="Github Icon" />
                    <img src={telegram} alt="Telegram Icon" />
                </div>
            </div>
        </div>
    )
}

export default MainTitleBlock;