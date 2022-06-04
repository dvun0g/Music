import { ChangeEvent, ChangeEventHandler, DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainPlayerProgressProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    left: number,
    rigth: number,
    image01?: string,
    image02?: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    value: number,
    disabled: boolean,
    className?: string,
}