import { ChangeEventHandler } from 'react';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface UploadInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    placeholder: string,
    className?: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}