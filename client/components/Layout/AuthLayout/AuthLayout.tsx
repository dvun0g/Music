import { FC } from "react";

import { AuthLayoutProps } from "./AuthLayout.types";

import styles from './AuthLayout.module.scss';

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className={styles.Container}>
            {children}
        </div>
    )
}

export default AuthLayout;