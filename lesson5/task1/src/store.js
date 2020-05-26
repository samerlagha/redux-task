import { createStore , combineReducers} from 'redux';
import userReduser from './users/users.reducer';

const appReducer = combineReducers({
    users: usersReduser,
})

const store = createStore(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENTION__());

    export default store;
    