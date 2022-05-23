import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import cn from 'classnames';

import { MainMenuLinkProps } from "./MainMenuLink.types";

import styles from './MainMenuLink.module.scss';

const MainMenuLink: FC<MainMenuLinkProps> = ({color='b' ,text, icon, href, className, ...props}) => {
    return (
        <button 
         className={className}
         {...props}>
            <Link href={href}>
                <a className={(cn(styles.Button, {[styles.Black]: color === 'b', [styles.Vinous]: color === 'v'}))}>
                    <Image src={icon} width={30} height={30}/>
                    <div>{text}</div>
                </a>
            </Link> 
        </button>
    )
}

export default MainMenuLink;