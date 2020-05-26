import { createStore, combineReducers } from 'redux';
import optionsReducers from './options/options.reducer';

const appReducer = combineReducers({
    options: optionsReducers,
});

const store = createStore(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;