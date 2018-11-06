import {
    ON_GET_GUESTS_SUCCESS,
    ON_GET_GUESTS_FAIL,
    ON_GET_CHECKS,
    ON_GET_CHECKS_SUCCESS,
    ON_GET_CHECKS_FAIL,
} from '../types'

const INITIAL_STATE = {
    checks: null,
    error: false,
    loading: true,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ON_GET_CHECKS:
            return {
                ...state,
                loading: true,
                error: false,
                checks: null
            };
        case ON_GET_CHECKS_SUCCESS:
console.log('ON_GET_CHECKS_SUCCESS', action.payload);
            return {
                ...state,
                error: false,
                loading: false,
                checks: action.payload
            };
        case ON_GET_CHECKS_FAIL:
            return {
                ...state,
                error: action.payload,
                checks: null
            };
        default: return state;
    }
}