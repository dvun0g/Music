import { Dispatch } from "redux";
import axios, { AxiosResponse } from 'axios';

import { API_URL } from './../../../http/index';

import { ISong, SongAction, SongActionTypes } from '../../reducers/Song/SongReducer.types';


export const songFetch = () => async (dispatch: Dispatch<SongAction>) => {
    try {
        dispatch({type: SongActionTypes.SONG_FETCH})
        const response = await axios.get(`${API_URL}/music`)
        dispatch({type: SongActionTypes.SONG_FETCH_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
}

export const songSetActive = (id: string) => async (dispatch: Dispatch<SongAction>) => {
    try {
        dispatch({type: SongActionTypes.SONG_FETCH})
        const response = await axios.get(`${API_URL}/music/${id}`)
        dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: response.data})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
} 

export const songRemoveActive = () => (dispatch: Dispatch<SongAction>) => {
    dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: null})
}

export const songSetNext = (songs: ISong[], activeSong: ISong, type: 'n' | 'p') => (dispatch: Dispatch<SongAction>) => {
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

export const songCreate = (song: FormData) => async (dispatch: Dispatch<SongAction>) => {
    try {
        await axios.post(`${API_URL}/music`, song)
        dispatch({type: SongActionTypes.SONG_FETCH})
        const response = await axios.get(`${API_URL}/music`)
        dispatch({type: SongActionTypes.SONG_FETCH_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
}

export const songUpdate = (song: ISong) => async (dispatch: Dispatch<SongAction>) => {
    try {
        await axios.put(`${API_URL}/music/${song._id}`, song)
        const response = await axios.get(`${API_URL}/music`)
        dispatch({type: SongActionTypes.SONG_FETCH_SUCCESS, payload: response.data})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
}

export const songAddWishlist = () => async (dispatch: Dispatch<SongAction>) => {
    try {
        dispatch({type: SongActionTypes.SONG_FETCH})
        const response: AxiosResponse<ISong[]> = await axios.get(`${API_URL}/music`)
        const songsWishlist = response.data.filter(i => i.wishlist)
        console.log(songsWishlist)
        dispatch({type: SongActionTypes.SONG_SET_WISHLIST, payload: songsWishlist})
    } catch (e) {
        dispatch({type: SongActionTypes.SONG_FETCH_ERROR, payload: e})
    }
}

export const songDelWishlist = () => (dispatch: Dispatch<SongAction>) => {
    dispatch({type: SongActionTypes.SONG_SET_WISHLIST, payload: []})
}