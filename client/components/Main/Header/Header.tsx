import { FC } from "react";

import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <div className={styles.Container}>
            <button className={styles.Logo}>Music 👽</button>
            <div className={styles.Account}>
                <div>Name</div>
                <button className={styles.Btn}>👾</button>
            </div>
        </div>
    )
}

export default Header;