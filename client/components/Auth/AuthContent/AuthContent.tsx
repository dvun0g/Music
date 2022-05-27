import { ChangeEvent, FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import AuthTitle from '../../UI/Auth/AuthTitle/AuthTitle';
import AuthButton from "../../UI/Auth/AuthButton/AuthButton";
import AuthInput from "../../UI/Auth/AuthInput/AuthInput";

import { IUser } from "../../../redux/reducers/Auth/AuthReducer.types";
import { UserLoginType } from "../../../redux/actionCreators/Auth/AuthActionCreator.types";

import styles from './AuthContent.module.scss';

const AuthContent: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {authRegistration, authLogin} = useActions()

    const router = useRouter()
    
    useEffect(() => {
        if (isAuth) {
            router.push('/')
        }
    }, [isAuth])

    const [login, setLogin] = useState<boolean>(true)
    
    const [userRegistration, setUserRegistration] = useState<IUser>({name: '', email: '', password: ''})
    const [userLogin, setUserLogin] = useState<UserLoginType>({email: '', password: ''})

    const hanlderLoginEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserLogin({...userLogin, email: e.target.value})
    }
    const hanlderLoginPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUserLogin({...userLogin, password: e.target.value})
    }

    const handlerRegistrationName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserRegistration({...userRegistration, name: e.target.value})
    }
    const handlerRegistrationEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserRegistration({...userRegistration, email: e.target.value})
    }
    const handlerRegistrationPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUserRegistration({...userRegistration, password: e.target.value})
    }
    // const handlerRegistrationName = (e: ChangeEvent<HTMLInputElement>) => {
    //     setUserRegistration({...userRegistration, name: e.target.value})
    // }

    const handlerButtonRegistration = () => {
        authRegistration(userRegistration)
        setUserRegistration({name: '', email: '', password: ''})
    }
    const handlerButtonLogin = () => {
        authLogin(userLogin)
        setUserLogin({email: '', password: ''})
    }

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
                        <AuthInput 
                         placeholder="Введите вашу почту" 
                         type="text"
                         value={userLogin.email}
                         onChange={hanlderLoginEmail}/>
                        <AuthInput 
                         placeholder="Введите пароль 🤫" 
                         type="password"
                         value={userLogin.password}
                         onChange={hanlderLoginPassword}/>
                      </>
                    : <>
                        <AuthInput 
                         placeholder="Введите ваш никнейм" 
                         type="text"
                         value={userRegistration.name}
                         onChange={handlerRegistrationName}/>
                        <AuthInput 
                         placeholder="Введите вашу почту" 
                         type="text"
                         value={userRegistration.email}
                         onChange={handlerRegistrationEmail}/>
                        <AuthInput 
                         placeholder="Придумайте пароль 🤫" 
                         type="password"
                         value={userRegistration.password}
                         onChange={handlerRegistrationPassword}/>
                        {/* <AuthInput placeholder="Подтверждение пароля" type="password"/> */}
                      </>
                }
            </div>
            <AuthButton 
             text={login ? 'Login' : 'Registration'}
             onClick={login ? handlerButtonLogin : handlerButtonRegistration} />
        </div>
    )
}

export default AuthContent;