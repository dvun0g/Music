import { Dispatch } from "redux";
import axios from 'axios';

import { SongActionTypes } from './../../reducers/Song/SongReducer.types';


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

// export const songSetActive = (song: string) => async (dispatch: Dispatch) => {
//     dispatch({type: SongActionTypes.SONG_SET_ACTIVE, payload: song})
// }