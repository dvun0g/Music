import { FC, memo } from "react";
import cn from 'classnames';

import { MainPlayerItemProps } from "./MainPlayerItem.types";

import styles from './MainPlayerItem.module.scss';

const MainPlayerItem: FC<MainPlayerItemProps> = ({color='w', 
                                                  size='s', 
                                                  img, 
                                                  className, 
                                                  disabled,
                                                  position='c', 
                                                  ...props}) => {
    return (
        <button 
         className={cn(className, styles.Button, {
             [styles.Small]: size === 's',
             [styles.Medium]: size === 'm',
             [styles.White]: color === 'w',
             [styles.Orange]: color === 'o',
             [styles.Center]: position === 'c',
             [styles.Right]: position === 'r',
             [styles.Left]: position === 'l',
         })} 
         disabled={disabled}
         {...props}>
            <img 
             src={img} 
             width={size === 's' ? 20 : 30} 
             height={size === 's' ? 20 : 30} 
             alt="Player Icon"/> 
        </button>
    )
}

export default memo(MainPlayerItem);