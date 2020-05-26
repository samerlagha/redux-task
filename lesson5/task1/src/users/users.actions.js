export const GO_PREV='USER/PREV';
export const GO_NEXT='USER?NEXT';
export const goPrev=()=>{
    return{
        type: GO_PREV,
    }
}

export const gonext=()=>{
    return{
        type: GO_NEXT
    }
}