import { IUser } from './../../reducers/Auth/AuthReducer.types';

export interface UserLoginType {
    email: string,
    password: string,
}

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser,
}