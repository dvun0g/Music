import { Dispatch } from "redux";

import { AudioActionTypes } from './../../reducers/Audio/AudioReducer.types';

export const audioPlay = () => (dispatch: Dispatch) => {
    dispatch({type:  AudioActionTypes.AUDIO_PLAY})
}

export const audioPause = () => (dispatch: Dispatch) => {
    dispatch({type: AudioActionTypes.AUDIO_PAUSE})
}

export const audioSetVolume = (volume: number) => (dispatch: Dispatch) => {
    dispatch({type: AudioActionTypes.AUDIO_SET_VOLUME, payload: volume})
}

export const audioSetDuration = (duration: number) => (dispatch: Dispatch) => {
    dispatch({type: AudioActionTypes.AUDIO_SET_DURATION, payload: duration})
}
export const audioSetCurrentTime = (time: number) => (dispatch: Dispatch) => {
    dispatch({type: AudioActionTypes.AUDIO_SET_CURRENT_TIME, payload: time})
}