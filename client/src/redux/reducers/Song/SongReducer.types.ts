export interface ISong {
    _id?: string,
    audio: string,
    image: string,
    author: string,
    name: string,
    wishlist: boolean,
}

export interface SongStateTypes {
    loading: boolean,
    error: unknown | string,
    songs: ISong[],
    wishlist: ISong[],
    activeSong: ISong | null,
}

export enum SongActionTypes {
    SONG_FETCH = 'SONG_FETCH',
    SONG_FETCH_SUCCESS = 'SONG_FETCH_SUCCESS',
    SONG_FETCH_ERROR = 'SONG_FETCH_ERROR',
    SONG_SET_ACTIVE = 'SONG_SET_ACTIVE',
    SONG_SET_WISHLIST = 'SONG_SET_WISHLIST',
}

export interface SongFetchAction {
    type: SongActionTypes.SONG_FETCH,
}

export interface SongFetchSuccessAction {
    type: SongActionTypes.SONG_FETCH_SUCCESS,
    payload: ISong[]
}

export interface SongFetchErrorAction {
    type: SongActionTypes.SONG_FETCH_ERROR,
    payload: unknown
}

export interface SongSetActive {
    type: SongActionTypes.SONG_SET_ACTIVE,
    payload: ISong | null
}

export interface SongWishlist {
    type: SongActionTypes.SONG_SET_WISHLIST,
    payload: ISong[],
}

export type SongAction = SongFetchAction 
                         | SongFetchSuccessAction 
                         | SongFetchErrorAction 
                         | SongSetActive 
                         | SongWishlist