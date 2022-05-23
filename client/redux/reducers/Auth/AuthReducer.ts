import { AuthAction, AuthActionTypes, AuthStateTypes } from "./AuthReducer.types"

const initialState: AuthStateTypes = {
    loading: false,
    error: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthAction): AuthStateTypes => {
    switch (action.type) {
        case AuthActionTypes.AUTH_FETCH:
            return {...state, loading: true}
        case AuthActionTypes.AUTH_FETCH_SUCCESS:
            return {...state, isAuth: true, error: null, loading: false}
        case AuthActionTypes.AUTH_FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}