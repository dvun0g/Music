import { FC, KeyboardEvent } from "react";
import cn from 'classnames';

import { MainModalErrorProps } from "./MainModalError.types";

import styles from './MainModalError.module.scss';

const MainModalError: FC<MainModalErrorProps> = ({className, 
                                                  active,
                                                  setActive, 
                                                  ...props}) => {

    const handleModal = () => {
        setActive(false)
    }

    return (
        <div 
         className={cn(styles.Container, className, {
             [styles.Active]: active
         })}
         onClick={handleModal}
         {...props}>
            <div className={styles.Content}>
                <div className={styles.Title}>
                    <div>Sorry this feature is not available yet</div>
                    <button className={styles.Btn}>🥺</button>
                </div>
            </div>
        </div>
    )
}

export default MainModalError;