import { Dispatch } from "react";
import { ThemeAction } from "../../reducers/Theme/ThemeReducer.types";

import { ThemeActionTypes } from '../../reducers/Theme/ThemeReducer.types';
import { colorType } from "./ThemeActionCreator.types";


export const themeChange = (color: colorType) => (dispacth: Dispatch<ThemeAction>) => {
    localStorage.setItem('theme', color)
    dispacth({type: ThemeActionTypes.THEME_CHANGE, payload: color})
}

export const activeMenuChange = (active: boolean) => (dispatch: Dispatch<ThemeAction>) => {
    dispatch({type: ThemeActionTypes.CHANGE_ACTIVE_MENU, payload: active})
}