import { Dispatch } from "react";
import { ThemeAction } from "../../reducers/Theme/ThemeReducer.types";

import { ThemeActionTypes } from '../../reducers/Theme/ThemeReducer.types';
import { colorType } from "./ThemeActionCretor.types";


export const themeChange = (color: colorType) => (dispacth: Dispatch<ThemeAction>) => {
    dispacth({type: ThemeActionTypes.THEME_CHANGE, payload: color})
}