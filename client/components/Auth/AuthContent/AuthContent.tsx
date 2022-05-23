import { FC, useState } from "react";

import AuthTitle from '../../UI/Auth/AuthTitle/AuthTitle';
import AuthButton from "../../UI/Auth/AuthButton/AuthButton";
import AuthInput from "../../UI/Auth/AuthInput/AuthInput";

import styles from './AuthContent.module.scss';

const AuthContent: FC = () => {
    const [login, setLogin] = useState<boolean>(true)

    return (
        <div className={styles.Container}>
            <h2 className={styles.Title}>Music 👽</h2>
            <div className={styles.BlockTitle}>
                <AuthTitle 
                 onClick={() => setLogin(true)} 
                 text='Login' 
                 color={login ? 'a' : 'b'}/>
                <AuthTitle 
                 onClick={() => setLogin(false)} 
                 text='Registration' 
                 color={login ? 'b' : 'a'}/>
            </div>
            <div className={styles.BlockInput}>
                {
                    login 
                    ? <>
                        <AuthInput placeholder="Введите вашу почту" type="text"/>
                        <AuthInput placeholder="Придумайте пароль 🤫" type="password"/>
                      </>
                    : <>
                        <AuthInput placeholder="Введите ваш никнейм" type="text"/>
                        <AuthInput placeholder="Введите вашу почту" type="text"/>
                        <AuthInput placeholder="Придумайте пароль 🤫" type="password"/>
                        <AuthInput placeholder="Подтверждение пароля" type="password"/>
                      </>
                }
            </div>
            <AuthButton text={login ? 'Login' : 'Registration'} />
        </div>
    )
}

export default AuthContent;