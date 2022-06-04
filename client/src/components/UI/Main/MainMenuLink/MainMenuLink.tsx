import { FC, memo } from "react";
import cn from 'classnames';
import { Link } from "react-router-dom";


import { MainMenuLinkProps } from "./MainMenuLink.types";

import styles from './MainMenuLink.module.scss';

const MainMenuLink: FC<MainMenuLinkProps> = ({color='b' ,text, icon, href, className, ...props}) => {
    return (
        <button 
         className={className}
         {...props}>
            <Link 
             to={href} 
             className={(cn(styles.Container, {
                 [styles.Black]: color === 'b', 
                 [styles.Red]: color === 'r'}))}>
                    <img 
                     src={icon} 
                     width={30} 
                     height={30} />
                    <div>{text}</div>
            </Link> 
        </button>
    )
}

export default memo(MainMenuLink);