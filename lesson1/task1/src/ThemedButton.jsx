import React from 'react';
import {ThemContext} from './themes-context';

class ThemedButton extends React.Component{

    render(){
        this.context;
    return <button {...this.props} 
     style={{
         backgroundColor:this.context.background,
         color:this.context.fontColor,
     }}
    className='btn'></button>

    }

}
ThemedButton.contextType=ThemContext;

export default ThemedButton;