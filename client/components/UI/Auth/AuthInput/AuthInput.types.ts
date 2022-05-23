import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AuthInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    placeholder: string,
    type: 'text' | 'password',
}