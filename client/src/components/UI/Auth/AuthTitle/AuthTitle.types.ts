import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AuthTitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    className?: string,
    color?: 'a' | 'b',
}
