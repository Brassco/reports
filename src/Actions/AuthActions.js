import {
    AUTH_CHANGE_NAME,
    AUTH_CHANGE_PASS,
    AUTH_ON_LOGIN, AUTH_ON_LOGIN_FAIL, AUTH_ON_LOGIN_SUCCESS
} from '../types'

import {LOGIN_URL} from '../urls';
import axios from 'axios';

export const changeName = (name) => {
    console.log('changeName', name)
    return {
        type: AUTH_CHANGE_NAME,
        payload: name
    }
}

export const changePassword = (password) => {
    return {
        type: AUTH_CHANGE_PASS,
        payload: password
    }
}

export const onLogin = (name, password, onSuccesCallback) => {
    return (dispatch) => {
        dispatch({
            type: AUTH_ON_LOGIN
        })

        if (name.length < 1) {
            onLoginError(dispatch, 'Name is require');
            return;
        }
        if (password.length < 1) {
            onLoginError(dispatch, 'Password is require');
            return;
        }
        let body = {
            "Username": name,
            "Password": password
        }

        axios.post(LOGIN_URL, JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then( res => {
                onLoginSucces(dispatch, res, onSuccesCallback)
            })
            .catch(
                err =>{
                    console.log(err)
                    onLoginError(dispatch, 'Auth error')
                }
            )
    }
}

const onLoginSucces = (dispatch, data, onSuccesCallback) => {
    console.log('onLoginSucces', data);
    dispatch({
        type: AUTH_ON_LOGIN_SUCCESS,
        payload: data
    })
    onSuccesCallback()
}

const onLoginError = (dispatch, errorMsg) => {
    console.log('onLoginError', errorMsg);
    dispatch({
        type: AUTH_ON_LOGIN_FAIL,
        payload: errorMsg
    })
}