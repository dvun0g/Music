import { AudioStateTypes, AudioAction, AudioActionTypes } from './AudioReducer.types';

const initialState: AudioStateTypes = {
    play: false,
    activeTrack: null,
    duration: 0,
    currentTime: 0,
    volume: 50,
}

export const audioReducer = (state= initialState, action: AudioAction): AudioStateTypes => {
    switch(action.type) {
        case AudioActionTypes.AUDIO_PLAY: 
            return {...state, play: true}
        case AudioActionTypes.AUDIO_PAUSE:
            return {...state, play: false}
        case AudioActionTypes.AUDIO_SET_VOLUME:
            return {...state, volume: action.payload}
        case AudioActionTypes.AUDIO_SET_DURATION:
            return {...state, duration: action.payload}
        case AudioActionTypes.AUDIO_SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        default:
            return state
    }
}