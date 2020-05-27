import React from 'react';
import  UsersInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import {Provider} from 'react-redux';
import store from './store';

const App =()=>{

    return(
        <Provider store={store}>
            <div className='page'>
                <UsersInfo />
                <SearchField />
            </div>
        </Provider>
    )
};

export default App;