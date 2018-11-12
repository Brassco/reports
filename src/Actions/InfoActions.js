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

    return (dispatch) => {
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
                /*get checks*/
                axios.get(CHECKS_URL, {
                        headers: {
                            'Authorization': tokenString
                        }
                    }
                )
                    .then(checks => {
                        /*get guests*/
                        axios.get(GUESTS_URL, {
                                headers: {
                                    'Authorization': tokenString
                                }
                            }
                        )
                            .then(guests => {
                                /*get labor*/
                                axios.get(LABOR_URL, {
                                        headers: {
                                            'Authorization': tokenString
                                        }
                                    }
                                )
                                    .then(labor => {
                                        /*get tables*/
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
    }
}