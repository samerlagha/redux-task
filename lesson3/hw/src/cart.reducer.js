import { PRODUCT_ADD, PRODUCT_REMOVE } from './cart.actions';

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            return {
                ...state,
                products: state.products.concat(action.payload.product)
            }
        case PRODUCT_REMOVE:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            };
        default: return state;
    }
};

export default productReducer