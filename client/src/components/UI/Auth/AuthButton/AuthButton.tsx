import { FC } from "react";
import cn from 'classnames';

import { AuthButtonProps } from "./AuthButton.types";

import styles from './AuthButton.module.scss';

const AuthButton: FC<AuthButtonProps> = ({text, 
                                          className,
                                          onClick,
                                          disabled,
                                          ...props}) => {
    return (
        <button 
         className={cn(className, styles.Button, {
             [styles.Disabled]: disabled,
             [styles.Hover]: !disabled,
         })}
         onClick={onClick} 
         disabled={disabled}
         {...props}>
            {text}
        </button>
    )
}

export default AuthButton;