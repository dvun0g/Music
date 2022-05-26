import { FC } from "react";
import cn from 'classnames';

import { UploadInputProps } from "./UploadInput.types";

import styles from './UploadInput.module.scss';

const UploadInput: FC<UploadInputProps> = ({placeholder, className, ...props}) => {
    return (
        <div 
         className={cn(styles.Container, className)} 
         {...props}>
             <input type="text" placeholder={placeholder} className={styles.Input}/>
        </div>
    )
}

export default UploadInput;