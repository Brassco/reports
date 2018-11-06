import {
    ON_GET_LABOR,
    ON_GET_LABOR_SUCCESS,
    ON_GET_LABOR_FAIL,
} from '../types'

const INITIAL_STATE = {
    labor: null,
    error: false,
    loading: true,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ON_GET_LABOR:
            return {
                ...state,
                loading: true,
                error: false,
                labor: null
            };
        case ON_GET_LABOR_SUCCESS:
console.log('ON_GET_LABOR_SUCCESS', action.payload);
            return {
                ...state,
                error: false,
                loading: false,
                labor: action.payload
            };
        case ON_GET_LABOR_FAIL:
            return {
                ...state,
                error: action.payload,
                labor: null
            };
        default: return state;
    }
}