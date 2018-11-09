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
    ON_GET_TABLES,
    ON_GET_TABLES_SUCCESS,
} from '../types'

import {NET_SALES_URL, CHECKS_URL, GUESTS_URL, LABOR_URL, TABLES_URL} from '../urls';
import axios from 'axios';

import {tables} from '../tables';

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

        /*dispatch({
            type: ON_GET_CHECKS_SUCCESS,
            payload: {
                "title": "120",
                "xAxis": [
                    "11a",
                    "",
                    "",
                    "",
                    "",
                    "4p",
                    "",
                    "",
                    "",
                    "",
                    "9p"
                ],
                "yAxis": [
                    [
                        8,
                        24,
                        22,
                        7,
                        5,
                        7,
                        10,
                        15,
                        9,
                        8,
                        5
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
                        0,
                        0,
                        0
                    ]
                ]
            }
        })*/
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
console.log('getGuests');
            /*dispatch({
                type: ON_GET_GUESTS_SUCCESS,
                payload: {
                    "title": "248",
                    "xAxis": [
                        "11a",
                        "",
                        "",
                        "",
                        "",
                        "4p",
                        "",
                        "",
                        "",
                        "",
                        "9p"
                    ],
                    "yAxis": [
                        [
                            17,
                            49,
                            47,
                            9,
                            13,
                            16,
                            20,
                            41,
                            19,
                            16,
                            1
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
                            0,
                            0,
                            0
                        ]
                    ]
                }
        })*/

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
        //     type: ON_GET_LABOR_SUCCESS,
        //     payload: 36.43
        // })
        let tokenString = 'Bearer ' + token;
        axios.get(LABOR_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(labor => {
console.log('Labor response', labor)
                dispatch({
                    type: ON_GET_LABOR_SUCCESS,
                    payload: labor.data
                })
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
    }
}

export const getTables = (token) => {

    return (dispatch) => {
        dispatch({
            type: ON_GET_TABLES
        })

console.log('getTables', token);
        // dispatch({
        //     type: ON_GET_TABLES_SUCCESS,
        //     payload: tables
        // })
        let tokenString = 'Bearer ' + token;
        axios.get(TABLES_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(tables => {
                console.log(tables)
                dispatch({
                    type: ON_GET_TABLES_SUCCESS,
                    payload: tables.data
                })
            })
            .catch(
                err => {
                    console.log(err);
                }
            )
    }
}