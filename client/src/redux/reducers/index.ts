import { combineReducers } from "redux";

import { authReducer } from "./Auth/AuthReducer";
import { commonReducer } from "./Common/CommonReducer";
import { songReducer } from './Song/SongReducer';
import { audioReducer } from './Audio/AudioReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    common: commonReducer,
    song: songReducer,
    audio: audioReducer,
    
})

export type RootState = ReturnType<typeof rootReducer>