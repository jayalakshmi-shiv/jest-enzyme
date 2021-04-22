import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk';

export const middleWare = [ReduxThunk];

export default createStore(rootReducer, {}, applyMiddleware(...middleWare));