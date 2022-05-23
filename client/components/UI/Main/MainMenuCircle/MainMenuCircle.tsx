import { FC } from "react";
import cn from 'classnames';

import { MainMenuCircleProps } from "./MainMenuCircle.types";

import styles from './MainMenuCircle.module.scss'

const MainMenuCircle: FC<MainMenuCircleProps> = ({color, className, ...props}) => {
    return (
        <button 
         className={cn(className, styles.Button, {
             [styles.Vinous]: color === 'v',
             [styles.Red]: color === 'r',
             [styles.Azure]: color === 'a'
         })} 
         {...props}>
        </button>
    )
}

export default MainMenuCircle;