export interface AudioStateTypes {
    duration: number,
    currentTime: number,
    volume: number,
    play: boolean,
}

export enum AudioActionTypes {
    AUDIO_PLAY = 'AUDIO_PLAY',
    AUDIO_PAUSE = 'AUDIO_PAUSE',
    AUDIO_SET_VOLUME = 'AUDIO_SET_VOLUME',
    AUDIO_SET_DURATION = 'AUDIO_SET_DURATION',
    AUDIO_SET_CURRENT_TIME = 'AUDIO_SET_CURRENT_TIME',
}

export interface AudioPlayAction {
    type: AudioActionTypes.AUDIO_PLAY
}

export interface AudioPauseAction {
    type: AudioActionTypes.AUDIO_PAUSE
}

export interface AudioSetVolumeAction {
    type: AudioActionTypes.AUDIO_SET_VOLUME
    payload: number
}

export interface AudioSetDuration {
    type: AudioActionTypes.AUDIO_SET_DURATION,
    payload: number
}
export interface AudioSetCurrentTimeAction {
    type: AudioActionTypes.AUDIO_SET_CURRENT_TIME
    payload: number
}

export type AudioAction = AudioPlayAction 
                          | AudioPauseAction 
                          | AudioSetCurrentTimeAction 
                          | AudioSetVolumeAction 
                          | AudioSetDuration