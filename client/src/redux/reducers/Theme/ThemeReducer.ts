import { ThemeStateTypes, ThemeAction, ThemeActionTypes } from './ThemeReducer.types';

const initialState: ThemeStateTypes = {
    color: 'a',
    activeMenu: false,
}

export const themeReducer = (state = initialState, action: ThemeAction): ThemeStateTypes => {
    switch(action.type) {
        case ThemeActionTypes.THEME_CHANGE:
            return {...state, color: action.payload}
        case ThemeActionTypes.CHANGE_ACTIVE_MENU:
            return {...state, activeMenu: action.payload}
        default:
            return state;
    }
}