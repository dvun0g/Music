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

export const audioSetCurrentTime = (time: number) => (dispatch: Dispatch) => {
    dispatch({type: AudioActionTypes.AUDIO_SET_CURRENT_TIME, paylaod: time})
}

export const audioSetActiveTrakc = (audio: string | null) => (dispatch: Dispatch) => {
    dispatch({type: AudioActionTypes.AUDIO_ACTIVE_TRACK, payload: audio})
}
