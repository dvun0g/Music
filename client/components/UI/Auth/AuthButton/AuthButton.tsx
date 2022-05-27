import { FC } from "react";
import cn from 'classnames';

import { AuthButtonProps } from "./AuthButton.types";

import styles from './AuthButton.module.scss';

const AuthButton: FC<AuthButtonProps> = ({text, 
                                          className,
                                          onClick,
                                          ...props}) => {
    return (
        <button 
         className={cn(className, styles.Button)}
         onClick={onClick} 
         {...props}>
            {text}
        </button>
    )
}

export default AuthButton;