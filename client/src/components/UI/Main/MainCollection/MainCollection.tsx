import { FC, memo } from "react";
import cn from 'classnames';

import { MainCollectionProps } from "./MainCollection.types";

import styles from './MainCollection.module.scss';

const MainCollection: FC<MainCollectionProps> = ({title, 
                                                  tags, 
                                                  className, 
                                                  ...props}) => {
    return (
        <button 
         className={cn(className, styles.Container)} 
         {...props}>
             <div className={styles.Title}>{title}</div>
             <div className={styles.Text}>
                {tags.map((item: string, index: number) => (
                    <div key={index}>{item}</div>
                ))}    
             </div>
        </button>
    )
}

export default memo(MainCollection);