import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainCollectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    title: string, 
    tags: string[],
}