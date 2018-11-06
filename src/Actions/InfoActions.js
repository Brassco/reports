import {
    ON_GET_NET_SALES,
    ON_GET_NET_SALES_FAIL,
    ON_GET_NET_SALES_SUCCESS,
    ON_GET_CHECKS,
    ON_GET_CHECKS_FAIL,
    ON_GET_CHECKS_SUCCESS,
    ON_GET_GUESTS,
    ON_GET_GUESTS_FAIL,
    ON_GET_GUESTS_SUCCESS,
    ON_GET_LABOR,
    ON_GET_LABOR_SUCCESS,
} from '../types'

import {NET_SALES_URL, CHECKS_URL, GUESTS_URL, LABOR_URL} from '../urls';
import axios from 'axios';

export const getNetSales = (token) => {
console.log('getNetSales', token)
    return (dispatch) => {
        dispatch({
            type: ON_GET_NET_SALES
        })

        let tokenString = 'Bearer '+token;

console.log('getNetSales', tokenString);

        /*dispatch({
            type: ON_GET_NET_SALES_SUCCESS,
            payload: {
                "title": "$152",
                "xAxis": [
                    "7a",
                    "",
                    "",
                    "",
                    "2p",
                    "",
                    "",
                    "",
                    "7p"
                ],
                "yAxis": [
                    [
                        7,
                        20.25,
                        32.75,
                        5,
                        19.5,
                        23,
                        12.25,
                        7.25,
                        25.25
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ]
                ]
            }
        })*/

        axios.get(NET_SALES_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(netSales => {
                console.log('netSales', netSales)
                dispatch({
                    type: ON_GET_NET_SALES_SUCCESS,
                    payload: netSales.data
                })
            })
            .catch(
                err =>{
                    console.log(err);
                }
            )
    }
}

export const getChecks = (token) => {

    return (dispatch) => {
        dispatch({
            type: ON_GET_CHECKS
        })

        // dispatch({
        //     type: ON_GET_CHECKS_SUCCESS,
        //     payload: {
        //         "title": "",
        //         "xAxis": [],
        //         "yAxis": [
        //             [],
        //             []
        //         ]
        //     }
        // })
        let tokenString = 'Bearer ' + token;
        axios.get(CHECKS_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(checks => {
                console.log(checks)
                dispatch({
                    type: ON_GET_CHECKS_SUCCESS,
                    payload: checks.data
                })
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
    }
}

export const getGuests = (token) => {
    return (dispatch) => {
        dispatch({
            type: ON_GET_GUESTS
        })
// console.log('getGuests');
//             dispatch({
//                 type: ON_GET_GUESTS_SUCCESS,
//                 payload:  {
//                     "title": "",
//                     "xAxis": [],
//                     "yAxis": [
//                     [],
//                     []
//                 ]
//             }
//         })

        let tokenString = 'Bearer ' + token;
        axios.get(GUESTS_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(guests => {
                console.log(guests)
                dispatch({
                    type: ON_GET_GUESTS_SUCCESS,
                    payload: guests.data
                })
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
    }
}

export const getLabor = (token) => {

    return (dispatch) => {
        dispatch({
            type: ON_GET_LABOR
        })

        // dispatch({
        //     type: ON_GET_CHECKS_SUCCESS,
        //     payload: {
        //         "title": "",
        //         "xAxis": [],
        //         "yAxis": [
        //             [],
        //             []
        //         ]
        //     }
        // })
        let tokenString = 'Bearer ' + token;
        axios.get(LABOR_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(checks => {
                console.log(checks)
                dispatch({
                    type: ON_GET_LABOR_SUCCESS,
                    payload: checks.data
                })
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
    }
}