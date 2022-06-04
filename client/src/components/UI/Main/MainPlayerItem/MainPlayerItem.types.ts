import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MainPlayerItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    img: string,
    size?: 's' | 'm',
    className?: string,
    color?: 'w' | 'o',
    position?: 'l' | 'r' | 'c',
    disabled: boolean,
}