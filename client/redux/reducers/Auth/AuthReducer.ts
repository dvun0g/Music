import { AuthAction, AuthActionTypes, AuthStateTypes, IUser } from "./AuthReducer.types"

const initialState: AuthStateTypes = {
    loading: false,
    error: null,
    isAuth: false,
    user: {} as IUser
}

export const authReducer = (state = initialState, action: AuthAction): AuthStateTypes => {
    switch (action.type) {
        case AuthActionTypes.AUTH_FETCH:
            return {...state, loading: true}
        case AuthActionTypes.AUTH_FETCH_SUCCESS:
            return {...state, isAuth: true, error: null, loading: false, user: action.payload}
        case AuthActionTypes.AUTH_FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case AuthActionTypes.AUTH_LOGOUT:
            return {...state, loading: false, error: null, isAuth: false, user: {} as IUser}
        default:
            return state;
    }
}