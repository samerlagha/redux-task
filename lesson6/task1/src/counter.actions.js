export const INCREMENT ='COUNTER/INCREMENT';
export const DECREMENT='COUNTER/DECREMENT';
export const RESET ='COUNTER/RESET';


export const inc =()=>({type:INCREMENT})
export const dec =()=>({type:DECREMENT})
export const res =()=>({type:RESET})