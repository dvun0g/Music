import { FC } from 'react';
import cn from 'classnames';

import { AuthTitleProps } from './AuthTitle.types';

import styles from './AuthTitle.module.scss';

const AuthTitle: FC<AuthTitleProps> = ({color = 'w', 
                                        text, 
                                        className, 
                                        ...props}) => {
    return (
        <button 
         className={cn(styles.Button, className, {
             [styles.White]: color === 'b',
             [styles.Azure]: color === 'a',
         })} 
         {...props}>
            {text}
        </button>
    )
}

export default AuthTitle;