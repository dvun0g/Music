import { FC, useState } from "react";

import MainCollection from "../../UI/Main/MainCollection/MainCollection";
import MainModalError from "../../UI/Main/MainModalError/MainModalError";

import MainPlayerMenu from "../../UI/Main/MainPlayerMenu/MainPlayerMenu";
import MainTitleBlock from "../MainTitleBlock/MainTitleBlock";

import styles from './MainPlayer.module.scss';

const MainPlayer: FC = () => {
    const [modal, setModal] = useState<boolean>(false)

    const handlerModal = () => {
        setModal(true)
    }

    return (
        <div className={styles.Container}>
            <MainTitleBlock />
            <MainPlayerMenu />
            <MainCollection
             onClick={handlerModal} 
             title='01' 
             tags={['Classical', 'Music','Collection']}/>
            <MainCollection
             onClick={handlerModal} 
             title='01' 
             tags={['Classical', 'Music','Collection']}/>
            <MainModalError 
             active={modal} 
             setActive={setModal}/>
        </div>
    )
}

export default MainPlayer;