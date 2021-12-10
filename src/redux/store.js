import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import shiftReducer from './shift/shiftReducer';

const store = createStore(shiftReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;