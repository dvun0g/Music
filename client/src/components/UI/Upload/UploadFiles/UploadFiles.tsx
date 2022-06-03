import { FC, useState } from "react";
import cn from 'classnames';

import { UploadFilesProps } from "./UploadFiles.types";

import styles from './UploadFiles.module.scss';

const UploadFiles: FC<UploadFilesProps> = ({text, 
                                            type, 
                                            className,
                                            uploadFiles,
                                            file,
                                            ...props}) => {
    
    const [drag, setDrag] = useState<boolean>(false)

    // event : DragEvent<HTMLDivElement> - не работает надо понять почему
    const handlerStartDrag = (e: any) => {
        e.preventDefault()
        setDrag(true)
    }

    const handlerLeaveDrag = (e: any) => {
        e.preventDefault()
        setDrag(false)
    }

    const handlerDrop = (e: any) => {
        e.preventDefault()
        setDrag(false)
        uploadFiles(e.dataTransfer.files[0])
    }

    return (
        <div 
         className={cn(className, styles.Container)} 
         {...props}>
             {type === 'i' 
                        ? <div className={styles.Title}>Image</div> 
                        : null}
             {type === 'a' 
                        ? <div className={styles.Title}>Song</div> 
                        : null}
            {
                drag && !file 
                    ? <div 
                       className={styles.Block} 
                       onDragStart={e => handlerStartDrag(e)}
                       onDragLeave={e => handlerLeaveDrag(e)}
                       onDragOver={e => handlerStartDrag(e)}
                       onDrop={e => handlerDrop(e)}>
                          <div>
                            Release the file - {text}
                          </div>
                      </div> 
                    : null
            }
            {
                !drag && !file 
                    ? <div 
                       className={styles.Block} 
                       onDragStart={e => handlerStartDrag(e)}
                       onDragLeave={e => handlerLeaveDrag(e)}
                       onDragOver={e => handlerStartDrag(e)}>
                          <div>
                            Drag the file - {text}
                          </div>
                      </div> 
                    : null
            }
            {
                file 
                    ? <div className={styles.Block}> 
                        <div className={styles.Good}>
                            ✅
                        </div>
                      </div>
                    : null
            }
        </div>
    )
}

export default UploadFiles;