import {
    AUTH_CHANGE_NAME,
    AUTH_CHANGE_PASS,
    AUTH_ON_LOGIN, AUTH_ON_LOGIN_FAIL, AUTH_ON_LOGIN_SUCCESS
} from '../types'

const INITIAL_STATE = {
    name: '',
    password: '',
    user: null,
    error: false,
    loading: false,
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case AUTH_CHANGE_NAME:
            return {...state,
                error: false,
                name: action.payload};
        case AUTH_CHANGE_PASS:
            return {...state,
                error: false,
                password: action.payload};
        case AUTH_ON_LOGIN:
            return {
                ...state,
                error: null,
                loading: true
            }
        case AUTH_ON_LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                user: action.payload
            }
        case AUTH_ON_LOGIN_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
                user: null
            }
        default: return state;
    }
}