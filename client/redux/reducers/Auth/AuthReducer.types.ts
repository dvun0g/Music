export interface AuthStateTypes {
    loading: boolean,
    error: null | string,
    isAuth: boolean
}

export enum AuthActionTypes {
    AUTH_FETCH = 'AUTH_FETCH',
    AUTH_FETCH_SUCCESS = 'AUTH_FETCH_SUCCESS',
    AUTH_FETCH_ERROR = 'AUTH_FETCH_ERROR',
}

export interface AuthFetchAction {
    type: AuthActionTypes.AUTH_FETCH
}

export interface AuthFetchSuccessAction {
    type: AuthActionTypes.AUTH_FETCH_SUCCESS
}

export interface AuthFetchErrorAction {
    type: AuthActionTypes.AUTH_FETCH_ERROR,
    payload: string
}

export type AuthAction = AuthFetchAction 
                        | AuthFetchSuccessAction 
                        | AuthFetchErrorAction