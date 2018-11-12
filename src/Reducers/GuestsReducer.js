import {
    ON_GET_GUESTS,
    ON_GET_GUESTS_SUCCESS,
    ON_GET_GUESTS_FAIL,
} from '../types'

const INITIAL_STATE = {
    guests: null,
    error: false,
    loading: true,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ON_GET_GUESTS:
            return {
                ...state,
                loading: true,
                error: false,
                guests: null
            };
        case ON_GET_GUESTS_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                guests: action.payload
            };
        case ON_GET_GUESTS_FAIL:
            return {
                ...state,
                error: action.payload,
                guests: null
            };
        default: return state;
    }
}