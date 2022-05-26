import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MainSongProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    _id: string | undefined,
    title: string,
    author: string,
    img: string,
    song: string,
    wishlist: boolean,
    className?: string,
}