import React from 'react';
import {connect} from 'react-redux';
import * as actions from './counter.actions';

const Counter=({counter,inc,dec,res})=>{
    return(
        <div className='counter'>
            <button className='counter__button' onClick={dec}>
                -
            </button>
            <span className='counter__value' onClick={res}>
                {counter}
            </span>
            <button className='counter__button' onClick={inc}>
                +
            </button>
        </div>
    );
};
const mapStateToProps= state=>{
    return{
        counter: state
    }
};
export default connect(mapStateToProps,actions)(Counter);