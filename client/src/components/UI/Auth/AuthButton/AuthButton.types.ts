import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler } from "react";

export interface AuthButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string,
    className?: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
}