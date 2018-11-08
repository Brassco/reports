import {
    ON_GET_TABLES,
    ON_GET_TABLES_SUCCESS,
    ON_GET_TABLES_FAIL,
} from '../types'

const INITIAL_STATE = {
    tables: [],
    error: false,
    loading: true,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ON_GET_TABLES:
            return {
                ...state,
                loading: true,
                error: false,
                tables: null
            };
        case ON_GET_TABLES_SUCCESS:
console.log('ON_GET_TABLES_SUCCESS', action.payload)
            return {
                ...state,
                error: false,
                loading: false,
                tables: action.payload
            };
        case ON_GET_TABLES_FAIL:
            return {
                ...state,
                error: action.payload,
                tables: null
            };
        default: return state;
    }
}