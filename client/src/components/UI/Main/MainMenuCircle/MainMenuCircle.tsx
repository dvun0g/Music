import { FC, memo } from "react";
import cn from 'classnames';

import { useActions } from "../../../../hooks/useActions";

import { MainMenuCircleProps } from "./MainMenuCircle.types";

import styles from './MainMenuCircle.module.scss'

const MainMenuCircle: FC<MainMenuCircleProps> = ({color, className, ...props}) => {
    const {themeChange} = useActions()
    const handleColor = () => {
        themeChange(color)
    }
    return (
        <button 
         className={cn(className, styles.Container, {
             [styles.White]: color === 'w',
             [styles.Vinous]: color === 'v',
             [styles.Red]: color === 'r',
             [styles.Azure]: color === 'a'
         })}
         onClick={handleColor} 
         {...props}>
        </button>
    )
}

export default memo(MainMenuCircle);