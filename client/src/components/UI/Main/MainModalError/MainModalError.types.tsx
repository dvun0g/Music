import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface MainModalErrorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>, 
}