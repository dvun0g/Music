import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AuthButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    text: string,
    className?: string,
}