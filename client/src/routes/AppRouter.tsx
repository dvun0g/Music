import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

import Main from "../pages/Main";
import Auth from "../pages/Auth";
import UploadPage from "../pages/Upload";


const AppRouter: FC = () => {   
    const {authCheck} = useActions()
    // const {isAuth} = useTypedSelector(state => state.auth)

    const accessToken = localStorage.getItem('accessToken') 
    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            authCheck()
        }
    }, [])
    return (
        <Routes>
            {
                accessToken
                     ? <>
                            <Route path='/' element={<Main />}/>
                            <Route path='upload' element={<UploadPage />}/>
                       </>
                     : <Route path='/' element={<Auth />}/>  
            } 
        </Routes>
    )
}

export default AppRouter;