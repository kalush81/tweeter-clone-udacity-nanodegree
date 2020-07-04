import { createStore, compose } from "redux";
import middleware from './middleware';

import combineReducers from "./reducers";

const store = createStore(combineReducers, compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

));

export default store;
