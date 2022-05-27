export interface AuthStateTypes {
    loading: boolean,
    error: null | string,
    isAuth: boolean,
    user: IUser,
}

export interface IUser {
    name: string,
    email: string,
    password: string,
}

export enum AuthActionTypes {
    AUTH_FETCH = 'AUTH_FETCH',
    AUTH_FETCH_SUCCESS = 'AUTH_FETCH_SUCCESS',
    AUTH_FETCH_ERROR = 'AUTH_FETCH_ERROR',
    AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export interface AuthFetchAction {
    type: AuthActionTypes.AUTH_FETCH,
}

export interface AuthFetchSuccessAction {
    type: AuthActionTypes.AUTH_FETCH_SUCCESS,
    payload: IUser,
}

export interface AuthFetchErrorAction {
    type: AuthActionTypes.AUTH_FETCH_ERROR,
    payload: string,
}

export interface AuthLogout {
    type: AuthActionTypes.AUTH_LOGOUT,
}

export type AuthAction = AuthFetchAction 
                        | AuthFetchSuccessAction 
                        | AuthFetchErrorAction 
                        | AuthLogout