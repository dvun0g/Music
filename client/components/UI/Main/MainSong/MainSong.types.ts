import { StaticImageData } from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MainSongProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    _id: string,
    title: string,
    author: string,
    img: string,
    song: string,
    className?: string,
}