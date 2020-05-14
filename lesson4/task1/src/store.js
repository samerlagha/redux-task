import { createStore } from 'redux'
import counterReduser from './counter.reducer';

const store = createStore(counterReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;