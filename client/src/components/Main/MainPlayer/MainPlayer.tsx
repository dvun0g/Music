import { FC } from "react";
// import { Link } from "react-router-dom";

import MainCollection from "../../UI/Main/MainCollection/MainCollection";

import MainPlayerMenu from "../../UI/Main/MainPlayerMenu/MainPlayerMenu";

import styles from './MainPlayer.module.scss';

// import github from '../../../assets/img/Main/github.svg'
// import telegram from '../../../assets/img/Main/telegram.svg'

const MainPlayer: FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.BlockTitle}>
                    {/* <Link to=''>
                        <img src={github} />
                    </Link>
                    <Link to=''>
                        <img src={telegram} />
                    </Link> */}
            </div>
            <MainPlayerMenu />
            <MainCollection title='01' tags={['Classical', 'Music','Collection']}/>
            <MainCollection title='01' tags={['Classical', 'Music','Collection']}/>
        </div>
    )
}

export default MainPlayer;