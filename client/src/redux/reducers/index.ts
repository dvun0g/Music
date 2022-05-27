import { combineReducers } from "redux";

import { authReducer } from "./Auth/AuthReducer";
import { themeReducer } from "./Theme/ThemeReducer";
import { songReducer } from './Song/SongReducer';
import { audioReducer } from './Audio/AudioReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    song: songReducer,
    audio: audioReducer,
    
})

export type RootState = ReturnType<typeof rootReducer>