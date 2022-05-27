import { ChangeEventHandler, DetailedHTMLProps, HTMLAttributes } from "react";

export interface AuthInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    placeholder: string,
    type: 'text' | 'password',
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}