import { SongAction, SongActionTypes, SongStateTypes } from "./SongReducer.types"

const initialState: SongStateTypes = {
    loading: false,
    error: null,
    songs: [],
    activeSong: null,
}


export const songReducer = (state = initialState, action: SongAction): SongStateTypes => {
    switch (action.type) {
        case SongActionTypes.SONG_FETCH:
            return {...state, loading: true}
        case SongActionTypes.SONG_FETCH_SUCCESS:
            return {...state, loading: false, error: null, songs: action.payload}
        case SongActionTypes.SONG_FETCH_ERROR:
            return {...state, loading: false, error: action.payload}
        case SongActionTypes.SONG_SET_ACTIVE:
            return {...state, activeSong: action.payload}
        default:
            return state
    }
}