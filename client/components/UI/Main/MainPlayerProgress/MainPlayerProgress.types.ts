import { ChangeEvent, ChangeEventHandler, DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainPlayerProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    left: number,
    rigth: number,
    image: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: number,
    className?: string
}