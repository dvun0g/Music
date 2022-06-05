import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';

import $api, { API_URL } from '../../../http';

import { AuthAction, AuthActionTypes, IUser } from './../../reducers/Auth/AuthReducer.types';
import { UserLoginType, AuthResponse } from './AuthActionCreator.types';


export const authRegistration = (user: IUser) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.AUTH_FETCH})
        const response: AxiosResponse<AuthResponse> = await $api.post('/auth/registration', user)
        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({type: AuthActionTypes.AUTH_FETCH_SUCCESS, payload: response.data.user})
    } catch (e) {
        console.log(e)
        dispatch({type: AuthActionTypes.AUTH_FETCH_ERROR, payload: e})        
    }
}

export const authLogin = (user: UserLoginType) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.AUTH_FETCH})
        const response: AxiosResponse<AuthResponse> = await $api.post('/auth/login', user)
        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({type: AuthActionTypes.AUTH_FETCH_SUCCESS, payload: response.data.user})
    } catch (e) {
        dispatch({type: AuthActionTypes.AUTH_FETCH_ERROR, payload: e})        
    }
}

export const authLogout = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.AUTH_FETCH})
        await $api.post('/auth/logout')
        localStorage.removeItem('accessToken')
        dispatch({type: AuthActionTypes.AUTH_LOGOUT})   
    } catch (e) {
        dispatch({type: AuthActionTypes.AUTH_FETCH_ERROR, payload: e})        
    }
}

export const authCheck = () => async (dispatch: Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.AUTH_FETCH})
        const response: AxiosResponse<AuthResponse> = await axios.get(`${API_URL}/auth/refresh`, 
                                                                        {withCredentials: true})
        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({type: AuthActionTypes.AUTH_FETCH_SUCCESS, payload: response.data.user})
    } catch (e) {
        dispatch({type: AuthActionTypes.AUTH_FETCH_ERROR, payload: e})        
    }
}