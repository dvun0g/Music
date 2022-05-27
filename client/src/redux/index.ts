import { RootState, rootReducer } from './reducers/index';
import {applyMiddleware, createStore, Store } from "redux";
import thunk from 'redux-thunk';

export const store:Store<RootState> = createStore(rootReducer, applyMiddleware(thunk))