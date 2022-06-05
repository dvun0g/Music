import { Dispatch } from "react";

import { CommonAction } from "../../reducers/Common/CommonReducer.types";
import { CommonActionTypes } from '../../reducers/Common/CommonReducer.types';
import { colorType } from "./CommonActionCreator.types";


export const themeChange = (color: colorType) => (dispacth: Dispatch<CommonAction>) => {
    localStorage.setItem('theme', color)
    dispacth({type: CommonActionTypes.CHANGE_THEME, payload: color})
}

export const activeMenuChange = (active: boolean) => (dispatch: Dispatch<CommonAction>) => {
    dispatch({type: CommonActionTypes.CHANGE_ACTIVE_MENU, payload: active})
}