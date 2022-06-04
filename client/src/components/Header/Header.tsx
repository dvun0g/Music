import { FC } from "react";
import { Link } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from './Header.module.scss';

import menu from '../../assets/img/Main/menu.svg';

const Header: FC = () => {
    const {user} = useTypedSelector(state => state.auth)
    const {authLogout, songRemoveActive, activeMenuChange} = useActions()

    const handleLogout = () => {
        songRemoveActive()
        authLogout()
    }

    const handleMenu = () => {
        activeMenuChange(true)
    }

    return (
        <div className={styles.Container}>
            <Link to="/" className={styles.Logo}>Music 👽</Link>
            <button 
             className={styles.Menu}
             onClick={handleMenu}>
                <img src={menu} alt="" />
            </button>
            <div className={styles.Account}>
                <button className={styles.Btn}>👾</button>
                <div className={styles.Name}>{user.name}</div>
                <button onClick={handleLogout} className={styles.Logout}>Logout</button>
            </div>
        </div>
    )
}

export default Header;