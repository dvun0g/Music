import Link from "next/link";
import { FC } from "react";

import styles from './Header.module.scss';

const Header: FC = () => {
    return (
        <div className={styles.Container}>
            <Link href="/" className={styles.Logo} shallow={true}>
                <a className={styles.Logo}>Music 👽</a>
            </Link>
            <div className={styles.Account}>
                <div>Name</div>
                <button className={styles.Btn}>👾</button>
            </div>
        </div>
    )
}

export default Header;