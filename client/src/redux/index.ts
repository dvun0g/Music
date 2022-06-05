import {applyMiddleware, createStore, Store } from "redux";
import thunk from 'redux-thunk';

import { RootState, rootReducer } from './reducers/index';

export const store:Store<RootState> = createStore(rootReducer, applyMiddleware(thunk))