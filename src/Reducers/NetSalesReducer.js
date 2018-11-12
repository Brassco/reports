import {
    ON_GET_NET_SALES,
    ON_GET_NET_SALES_SUCCESS,
    ON_GET_NET_SALES_FAIL,
} from '../types'

const INITIAL_STATE = {
    data: null,
    error: false,
    loading: true,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ON_GET_NET_SALES:
            return {
                ...state,
                loading: true,
                error: false,
                data: null
            };
        case ON_GET_NET_SALES_SUCCESS:
            return {
                ...state,
                error: false,
                loading: false,
                data: action.payload
            };
        case ON_GET_NET_SALES_FAIL:
            return {
                ...state,
                error: action.payload,
                data: null
            };
        default: return state;
    }
}