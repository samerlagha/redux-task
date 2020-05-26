import React from 'react';

const User =({name ,age})=>{

    return(

        <li className='user'>
            <span className='user_name'>{name}</span>
    <span className='user_age'>{age}</span>
        </li>
    )
}

export default User;