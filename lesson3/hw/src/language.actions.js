export const SET_LANGUAGE = 'LANGUAGE';

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        payload: { language }
    }
}