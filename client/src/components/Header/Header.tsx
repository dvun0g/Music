import { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from './Header.module.scss';

const Header: FC = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {authLogout} = useActions()

    return (
        <div className={styles.Container}>
            <Link to="/" className={styles.Logo}>Music 👽</Link>
            <div className={styles.Account}>
                <button className={styles.Btn}>👾</button>
                <div>{user.name}</div>
                <button onClick={authLogout} className={styles.Logout}>Logout</button>
            </div>
        </div>
    )
}

export default Header;