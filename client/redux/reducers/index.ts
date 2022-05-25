import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";

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

export const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextState.count = state.count 
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>