export interface AudioStateTypes {
    duration: number,
    volume: number,
    activeTrack: string | null,
    play: boolean,
}

export enum AudioActionTypes {
    AUDIO_PLAY = 'AUDIO_PLAY',
    AUDIO_PAUSE = 'AUDIO_PAUSE',
    AUDIO_SET_VOLUME = 'AUDIO_SET_VOLUME',
    AUDIO_SET_CURRENT_TIME = 'AUDIO_SET_CURRENT_TIME',
    AUDIO_ACTIVE_TRACK = 'AUDIO_ACTIVE_TRACK',
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

export interface AudioSetCurrentTimeAction {
    type: AudioActionTypes.AUDIO_SET_CURRENT_TIME
    payload: number
}

export interface AudioActiveTrackAction {
    type: AudioActionTypes.AUDIO_ACTIVE_TRACK
    payload: string | null,
}

export type AudioAction = AudioPlayAction 
                          | AudioPauseAction 
                          | AudioSetCurrentTimeAction 
                          | AudioSetVolumeAction 
                          | AudioActiveTrackAction