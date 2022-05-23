import { FC } from "react";
import cn from 'classnames';


import MainPlayerItem from "../MainPlayerItem/MainPlayerItem";

import { MainPlayerMenuProps } from "./MainPlayerMenu.types";

import styles from './MainPlayerMenu.module.scss';

import previous from '../../../../assets/img/Main/previous.svg';
import next from '../../../../assets/img/Main/next.svg';
import play from '../../../../assets/img/Main/play.svg';

const MainPlayerMenu: FC<MainPlayerMenuProps> = ({className, ...props}) => {
    return (
        <div 
         className={cn(className, styles.Container)}
         {...props}>
                <div className={styles.Duration}>Длительность</div>
                <div className={styles.BlockButton}>
                    <MainPlayerItem img={previous}/>
                    <MainPlayerItem img={play} size='m' color='o'/>
                    <MainPlayerItem img={next}/>
                </div>
                <div className={styles.Volume}>Громкость</div>
        </div>
    )
}

export default MainPlayerMenu;