'use strict';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from './middleware/promiseMiddleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./rootReducer";
import {config} from '../config/config'

const persistConfig = {
    key:config.appName,
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware)
)(createStore);

export const store = createStoreWithMiddleware(persistedReducer);

export default function configureStore() {
    return store;
}
