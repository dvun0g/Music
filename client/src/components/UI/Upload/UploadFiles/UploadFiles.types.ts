import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export interface UploadFilesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string,
    text: string,
    type: 'i' | 'a',
    file: File | '',
    uploadFiles: Function,
}