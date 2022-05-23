import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MainSongProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    author: string,
    img: StaticImageData,
    active?: boolean,
    className?: string,
}