import { reducer, RootState } from './reducers/index';
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";


export const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, applyMiddleware(thunk))

export const wrapper = createWrapper(makeStore, {debug: true})

export type NuxtThunkDispatch = ThunkDispatch<RootState, void, AnyAction>