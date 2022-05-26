import { Dispatch } from "redux";
import axios from 'axios';

import { ISong, SongActionTypes } from './../../reducers/Song/SongReducer.types';


export const songFetch = () => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SongActionTypes.SONG_FETCH})
        const response = await axios.get('http://localhost:8000/music')
        dispatch({type: SongActionTypes.SONG_FETCH_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
}

export const songSetActive = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SongActionTypes.SONG_FETCH})
        const responce = await axios.get(`http://localhost:8000/music/${id}`)
        dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: responce.data})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
} 

export const songSetNext = (songs: ISong[], activeSong: ISong, type: 'n' | 'p') => (dispatch: Dispatch) => {
    const length = songs.length
    const index = songs.findIndex(song => song._id === activeSong._id)
    switch (type) {
        case 'n':
            if (index + 1 < length) {
                const nextSong = songs[index + 1]
                dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: nextSong})
                return
            } else {
                const nextSong = songs[0]
                dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: nextSong})
                return
            }
        case 'p':
            if (index - 1 >= 0) {
                const previousSong = songs[index - 1]
                dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: previousSong})
                return
            } else {
                const previousSong = songs[length - 1]
                dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: previousSong})
                return                
            }
        default:
            return
    }
}   