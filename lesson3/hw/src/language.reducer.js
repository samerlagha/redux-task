import { SET_LANGUAGE } from './language.actions'


const initialState = 'en';

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.payload.language;

        default:
            return state
    }
}

export default languageReducer;