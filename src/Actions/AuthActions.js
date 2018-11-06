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

        // onLoginSucces(
        //     dispatch,
        //     {
        //         "username": "Via alloro test",
        //         "userId": "46103ca5-2bdd-4042-9205-0f949301d00f",
        //         "email": "info@vv.com",
        //         "phone": null,
        //         "token": "7RGdoqpwYC32nDZv0aItpFTAOmv2Sj14WiCXYbyGd9E6VcBopTx-_yeYKs-RUkquInj9PWFyR9wY9K3HE3qCpJwgU6IN7RMSRQb8fku2iUOOYy40tRvpsQGYepQFz0KdB9VMAnKmozcUiixEhlly4ExlVLeCQFFon-ABWFJBaWP1_WzloC-A708UZeoEOjUV7YCsXV6L_sFVz5dbghEb0cOFusJICV0-MwluamWrCV3yV3Nno5eBIKBCtXIcQuDWRKxqIiqJwYbbHzJRIXB29g",
        //         "tokenType": "bearer"
        //     },
        //     onSuccesCallback)

        axios.post(LOGIN_URL, JSON.stringify(body), {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then( res => {
                onLoginSucces(dispatch, res.data, onSuccesCallback)
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
    console.log('onLoginSucces', data)
    dispatch({
        type: AUTH_ON_LOGIN_SUCCESS,
        payload: data
    })
    onSuccesCallback()
}

const onLoginError = (dispatch, errorMsg) => {
    dispatch({
        type: AUTH_ON_LOGIN_FAIL,
        payload: errorMsg
    })
}