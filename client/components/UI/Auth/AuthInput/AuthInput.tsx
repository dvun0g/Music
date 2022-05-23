import { FC } from "react";
import cn from 'classnames';

import { AuthInputProps } from "./AuthInput.types";

import styles from './AuthInput.module.scss';

const AuthInput: FC<AuthInputProps> = ({className, type, placeholder, ...props}) => {
    return (
        <div 
         className={cn(className, styles.Container)} 
         {...props}>
             <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default AuthInput;