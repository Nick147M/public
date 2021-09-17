import { combineReducers, createStore, applyMiddleware } from 'redux';
import * as reducers from './state';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history'


const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    ...reducers
});

export const history: History = createBrowserHistory({
    basename: process.env.PUBLIC_URL
})

const rootReducer = createRootReducer(history);
export type AppState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware()
const middlewares = [routerMiddleware(history), sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);