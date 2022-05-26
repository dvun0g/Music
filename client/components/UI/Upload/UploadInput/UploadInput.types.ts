import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface UploadInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder: string,
    className?: string,
}