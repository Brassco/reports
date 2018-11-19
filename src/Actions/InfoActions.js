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

export const getData = (token) => {

    /*return (dispatch) => {
        dispatch({
            type: ON_GET_NET_SALES
        })
        let tokenString = 'Bearer '+token;
        axios.get(NET_SALES_URL, {
                headers: {
                    'Authorization': tokenString
                }
            }
        )
            .then(netSales => {
                /!*get checks*!/
                axios.get(CHECKS_URL, {
                        headers: {
                            'Authorization': tokenString
                        }
                    }
                )
                    .then(checks => {
                        /!*get guests*!/
                        axios.get(GUESTS_URL, {
                                headers: {
                                    'Authorization': tokenString
                                }
                            }
                        )
                            .then(guests => {
                                /!*get labor*!/
                                axios.get(LABOR_URL, {
                                        headers: {
                                            'Authorization': tokenString
                                        }
                                    }
                                )
                                    .then(labor => {
                                        /!*get tables*!/
                                        axios.get(TABLES_URL, {
                                                headers: {
                                                    'Authorization': tokenString
                                                }
                                            }
                                        )
                                            .then(tables => {
                                                dispatch({
                                                    type: ON_GET_NET_SALES_SUCCESS,
                                                    payload: netSales.data
                                                })
                                                dispatch({
                                                    type: ON_GET_CHECKS_SUCCESS,
                                                    payload: checks.data
                                                })
                                                dispatch({
                                                    type: ON_GET_GUESTS_SUCCESS,
                                                    payload: guests.data
                                                })
                                                dispatch({
                                                    type: ON_GET_LABOR_SUCCESS,
                                                    payload: labor.data
                                                })
                                                dispatch({
                                                    type: ON_GET_TABLES_SUCCESS,
                                                    payload: tables.data
                                                })
                                            })
                                    })
                            })
                    })
            })
            .catch(
                err =>{
                    console.log(err);
                }
            )
    }*/
    getNetSales(token);
    getChecks(token);
    getGuests(token);
    getLabor(token);
    getTables(token);
}

export const getNetSales = (token) => {
    return (dispatch) => {
        dispatch({
            type: ON_GET_NET_SALES
        })

        let tokenString = 'Bearer '+token;

        console.log('getNetSales', tokenString);

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