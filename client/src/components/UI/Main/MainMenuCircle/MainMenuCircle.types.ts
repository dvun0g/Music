import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface MainMenuCircleProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    color: 'r' | 'a' | 'v' | 'w',
}