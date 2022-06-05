import { FC, useState } from "react";

import { useActions } from "../../../hooks/useActions";
import useInput from "../../../hooks/useInput";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import AuthTitle from '../../UI/Auth/AuthTitle/AuthTitle';
import AuthButton from "../../UI/Auth/AuthButton/AuthButton";
import AuthInput from "../../UI/Auth/AuthInput/AuthInput";

import { IUser } from "../../../redux/reducers/Auth/AuthReducer.types";
import { UserLoginType } from "../../../redux/actionCreators/Auth/AuthActionCreator.types";

import styles from './AuthContent.module.scss';

const AuthContent: FC = () => {
    const {authRegistration, authLogin} = useActions()
    const {isAuth, loading} = useTypedSelector(state => state.auth)

    const [login, setLogin] = useState<boolean>(true)
    const [correctLogin, setCorrectLogin] = useState<boolean>(true)
    const [correctRegistration, setCorrectRegistration] = useState<boolean>(true)
    
    const nameRegistration = useInput('', {isEmpty: true, minLength: 3})
    const emailRegistration = useInput('', {isEmpty: true, minLength: 5, isEmail: true})
    const passwordRegistration = useInput('', {isEmpty: true, minLength: 5})

    const emailLogin = useInput('', {isEmpty: true, minLength: 5, isEmail: true})
    const passwordLogin = useInput('', {isEmpty: true, minLength: 5})

    const handlerButtonRegistration = () => {
        const userRegistration: IUser = {
            name: nameRegistration.value,
            email: emailRegistration.value,
            password: passwordRegistration.value,
        }
        authRegistration(userRegistration)

        if (isAuth) {
            nameRegistration.setValue('')
            emailRegistration.setValue('')
            passwordRegistration.setValue('')
        } else {
            setCorrectRegistration(false)
        }
    }

    const handlerButtonLogin = () => {
        const userLogin: UserLoginType = {
            email: emailLogin.value,
            password: passwordLogin.value,
        }
        authLogin(userLogin)
        
        if (isAuth) {
            emailLogin.setValue('')
            passwordLogin.setValue('')
        } else {
            setCorrectLogin(false)
        }
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
                        {emailLogin.isDirty && emailLogin.isEmpty 
                                            && <div className={styles.Error}>The field cannot be empty</div>}
                        {emailLogin.isDirty && emailLogin.minLengthError
                                            && <div className={styles.Error}>The minimum field length is 5</div>}
                        {emailLogin.isDirty && emailLogin.isEmail
                                            && <div className={styles.Error}>Incorrect email</div>}
                       
                        <AuthInput 
                         placeholder="Enter your email" 
                         type="text"
                         value={emailLogin.value}
                         onChange={emailLogin.onChange}
                         onBlur={emailLogin.onBlur}/>

                        {passwordLogin.isDirty && passwordLogin.isEmpty 
                                               && <div className={styles.Error}>The field cannot be empty</div>}
                        {passwordLogin.isDirty && passwordLogin.minLengthError
                                               && <div className={styles.Error}>The minimum field length is 5</div>}
                        
                        <AuthInput 
                         placeholder="Enter password 🤫" 
                         type="password"
                         value={passwordLogin.value}
                         onChange={passwordLogin.onChange}
                         onBlur={passwordLogin.onBlur}/>

                        {!correctLogin && !loading && <div className={styles.Error}>Login error</div> }
                      </>
                    : <>
                        {nameRegistration.isDirty && nameRegistration.isEmpty 
                                                  && <div className={styles.Error}>The field cannot be empty</div>}
                        {nameRegistration.isDirty && nameRegistration.minLengthError
                                                  && <div className={styles.Error}>The minimum field length is 3</div>}
                       
                        <AuthInput 
                         placeholder="Create a nickname" 
                         type="text"
                         value={nameRegistration.value}
                         onBlur={nameRegistration.onBlur}
                         onChange={nameRegistration.onChange}/>
                       
                        {emailRegistration.isDirty && emailRegistration.isEmpty 
                                                   && <div className={styles.Error}>The field cannot be empty</div>}
                        {emailRegistration.isDirty && emailRegistration.minLengthError
                                                   && <div className={styles.Error}>The minimum field length is 5</div>}
                        {emailRegistration.isDirty && emailRegistration.isEmail
                                                   && <div className={styles.Error}>Incorrect email</div>}
                         
                        <AuthInput 
                         placeholder="Create a mail" 
                         type="text"
                         value={emailRegistration.value}
                         onBlur={emailRegistration.onBlur}
                         onChange={emailRegistration.onChange}/>
                        
                        {passwordRegistration.isDirty && passwordRegistration.isEmpty 
                                                      && <div className={styles.Error}>The field cannot be empty</div>}
                        {passwordRegistration.isDirty && passwordRegistration.minLengthError
                                                      && <div className={styles.Error}>The minimum field length is 5</div>}
                        
                        <AuthInput 
                         placeholder="Create a password 🤫" 
                         type="password"
                         value={passwordRegistration.value}
                         onBlur={passwordRegistration.onBlur}
                         onChange={passwordRegistration.onChange}/>
                         
                        {!correctRegistration && !loading && <div className={styles.Error}>Registration error</div> }
                      </>
                }
            </div>
            <AuthButton 
             className={styles.Btn}
             disabled={login 
                    ? !emailLogin.isValidInput || !passwordLogin.isValidInput 
                    : !nameRegistration.isValidInput || !emailRegistration.isValidInput || !passwordRegistration.isValidInput}
             text={login ? 'Login' : 'Registration'} 
             onClick={login ? handlerButtonLogin : handlerButtonRegistration} />
        </div>
    )
}

export default AuthContent;