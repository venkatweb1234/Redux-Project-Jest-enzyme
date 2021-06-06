import { applyMiddleware, createStore } from 'redux';
import RootReducer from '../reducers/rootreducer';
import ReduxThunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import Logger from 'redux-logger';

export const middlewares = [ReduxThunk,Logger];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer)