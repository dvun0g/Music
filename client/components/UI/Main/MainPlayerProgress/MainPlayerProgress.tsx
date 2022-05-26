import { FC } from "react";
import cn from 'classnames';
import Image from "next/image";

import { MainPlayerProgressProps } from "./MainPlayerProgress.types";

import styles from './MainPlayerProgress.module.scss';

const MainPlayerProgress: FC<MainPlayerProgressProps> = ({left, 
                                                          rigth, 
                                                          className, 
                                                          image, 
                                                          onChange, 
                                                          value, 
                                                          ...props}) => {   
    return (
        <div className={cn(className, styles.Container)} {...props}>
            <div className={styles.Image}>
                <Image 
                 src={image} 
                 width={20} 
                 height={20}/>            
            </div>
            <input 
             type="range"
             min={0}
             max={rigth} 
             className={styles.Input}
             onChange={onChange}
             value={value}/>
            <div className={styles.Block}>
                <div>{left}</div>
                <div>{rigth}</div>
            </div>
        </div>
    )
}

export default MainPlayerProgress;