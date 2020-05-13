export const PRODUCT_ADD = 'ADD/PRODUCT';
export const PRODUCT_REMOVE = 'REMOVE/PRODUCT';

export const addProduct = (product) => {
    return {
        type: PRODUCT_ADD,
        payload: { product }
    }
};

export const removeProduct = (id) => {
    return {
        type: PRODUCT_REMOVE,
        payload: { id }
    }
}