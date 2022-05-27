import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import styles from './Header.module.scss';

const Header: FC = () => {
    const {user, isAuth} = useTypedSelector(state => state.auth)
    const {authLogout} = useActions()

    const router = useRouter()
    
    useEffect(() => {
        if (!isAuth) {
            router.push('/auth')
        }
    }, [isAuth])

    return (
        <div className={styles.Container}>
            <Link href="/" className={styles.Logo} shallow={true}>
                <a className={styles.Logo}>Music 👽</a>
            </Link>
            <div className={styles.Account}>
                <button className={styles.Btn}>👾</button>
                <div>{user.name}</div>
                <button onClick={authLogout} className={styles.Logout}>Logout</button>
            </div>
        </div>
    )
}

export default Header;