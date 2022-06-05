export interface CommonStateTypes {
    color: 'w' | 'a' | 'r' | 'v',
    activeMenu: boolean,
}

export enum CommonActionTypes {
    CHANGE_THEME = 'CHANGE_THEME',
    CHANGE_ACTIVE_MENU = 'CHANGE_ACTIVE_MENU',
}

export interface ChangeThemeAction {
    type: CommonActionTypes.CHANGE_THEME,
    payload: 'w' | 'a' | 'r' | 'v'
}

export interface ChnageActiveMenuAction {
    type: CommonActionTypes.CHANGE_ACTIVE_MENU,
    payload: boolean,
}

export type CommonAction = ChangeThemeAction 
                          | ChnageActiveMenuAction