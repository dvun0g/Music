import { FC } from "react";
import cn from 'classnames';

import { AuthButtonProps } from "./AuthButton.types";

import styles from './AuthButton.module.scss';

const AuthButton: FC<AuthButtonProps> = ({text, className, ...props}) => {
    return (
        <button 
         className={cn(className, styles.Button)} 
         {...props}>
            {text}
        </button>
    )
}

export default AuthButton;