import { FC } from "react";
import cn from 'classnames';
import Image from "next/image";

import { MainPlayerProgressProps } from "./MainPlayerProgress.types";

import styles from './MainPlayerProgress.module.scss';

const MainPlayerProgress: FC<MainPlayerProgressProps> = ({left, 
                                                          rigth, 
                                                          className, 
                                                          image01,
                                                          image02, 
                                                          onChange, 
                                                          value, 
                                                          ...props}) => {   
    return (
        <div 
         className={cn(className, styles.Container, {
             [styles.Volume]: image01 && image02
         })} 
         {...props}>
            {image01 
                    ? <div className={styles.Image}>
                        <Image 
                        src={image01} 
                        width={15} 
                        height={15}/>            
                    </div>
                    : null}
            <input 
             type="range"
             min={0}
             max={rigth} 
             className={styles.Input}
             onChange={onChange}
             value={value}/>
            {image02 
                    ? <div className={styles.Image}>
                        <Image 
                        src={image02} 
                        width={15} 
                        height={15}/>            
                    </div>
                    : null}
            {!image01 && !image02
                                 ? <div className={styles.Block}>
                                       <div>{left}</div>
                                       <div>{rigth}</div>
                                   </div>
                                : null}
        </div>
    )
}

export default MainPlayerProgress;