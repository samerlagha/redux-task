export const SET_USER = 'ADD/USER';
export const REMOVE_USER = 'REMOVE/USER';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: {
            user
        }
    }
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}