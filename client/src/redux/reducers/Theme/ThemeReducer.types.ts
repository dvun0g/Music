export interface ThemeStateTypes {
    color: 'w' | 'a' | 'r' | 'v',
    activeMenu: boolean,
}

export enum ThemeActionTypes {
    THEME_CHANGE = 'THEME_CHANGE',
    CHANGE_ACTIVE_MENU = 'CHANGE_ACTIVE_MENU',
}

export interface ThemeChangeAction {
    type: ThemeActionTypes.THEME_CHANGE,
    payload: 'w' | 'a' | 'r' | 'v'
}

export interface ChnageActiveMenu {
    type: ThemeActionTypes.CHANGE_ACTIVE_MENU,
    payload: boolean,
}

export type ThemeAction = ThemeChangeAction 
                          | ChnageActiveMenu