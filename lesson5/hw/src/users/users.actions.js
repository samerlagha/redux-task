export const SET_FILTERED_TEXT = 'FILTER/SET_FILTERED_TEXT';

export const setFilterText = (text) => {
    return {
        type: SET_FILTERED_TEXT,
        payload: {
            text
        }
    }
}