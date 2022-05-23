import { ThemeStateTypes, ThemeAction, ThemeActionTypes } from './ThemeReducer.types';

const initialState: ThemeStateTypes = {
    color: 'w',
}

export const themeReducer = (state = initialState, action: ThemeAction): ThemeStateTypes => {
    switch(action.type) {
        case ThemeActionTypes.THEME_CHANGE:
            return {...state, color: action.payload}
        default:
            return state;
    }
}