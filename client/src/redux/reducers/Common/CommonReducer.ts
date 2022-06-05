import { CommonStateTypes, CommonAction, CommonActionTypes } from './CommonReducer.types';

const initialState: CommonStateTypes = {
    color: 'a',
    activeMenu: false,
}

export const commonReducer = (state = initialState, action: CommonAction): CommonStateTypes => {
    switch(action.type) {
        case CommonActionTypes.CHANGE_THEME:
            return {...state, color: action.payload}
        case CommonActionTypes.CHANGE_ACTIVE_MENU:
            return {...state, activeMenu: action.payload}
        default:
            return state;
    }
}