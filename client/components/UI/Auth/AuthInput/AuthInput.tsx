import { FC } from "react";
import cn from 'classnames';

import { AuthInputProps } from "./AuthInput.types";

import styles from './AuthInput.module.scss';

const AuthInput: FC<AuthInputProps> = ({className, 
                                        type, 
                                        placeholder,
                                        value,
                                        onChange, 
                                        ...props}) => {
    return (
        <div 
         className={cn(className, styles.Container)} 
         {...props}>
             <input 
              type={type} 
              placeholder={placeholder}
              value={value}
              onChange={onChange} />
        </div>
    )
}

export default AuthInput;