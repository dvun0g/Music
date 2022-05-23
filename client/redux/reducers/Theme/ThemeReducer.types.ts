export interface ThemeStateTypes {
    color: 'w' | 'a' | 'r' | 'v';
}

export enum ThemeActionTypes {
    THEME_CHANGE = 'THEME_CHANGE',
}

export interface ThemeChangeAction {
    type: ThemeActionTypes.THEME_CHANGE,
    payload: 'w' | 'a' | 'r' | 'v'
}

export type ThemeAction = ThemeChangeAction