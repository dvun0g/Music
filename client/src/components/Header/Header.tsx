import { FC } from "react";
import { Link } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from './Header.module.scss';

const Header: FC = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {authLogout, songRemoveActive} = useActions()

    const handleLogout = () => {
        songRemoveActive()
        authLogout()
    }

    return (
        <div className={styles.Container}>
            <Link to="/" className={styles.Logo}>Music 👽</Link>
            <div className={styles.Account}>
                <button className={styles.Btn}>👾</button>
                <div>{user.name}</div>
                <button onClick={handleLogout} className={styles.Logout}>Logout</button>
            </div>
        </div>
    )
}

export default Header;