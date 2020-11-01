import axios from 'axios';

import { createMessage, returnError } from './messages'

import { GET_USERS, DELETE_USER, ADD_USER } from './types'

import { tokenConfig } from './auth'

export const getUsers = () => (dispatch, getState) => {
    axios.get('api/users/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USERS, 
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnError(err.response.data, err.response.status))
        })
}

export const deleteUser = (id) => (dispatch, getState) => {
    axios.delete(`api/users/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteUser: 'user deleted' }))
            dispatch({
                type: DELETE_USER, 
                payload: id
            })
        })
        .catch(err => console.log('Err in deleting user: ', err))
}

export const addUser = (user) => (dispatch, getState) => {
    axios.post('api/users/', user, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addUser: 'user added'}))
            dispatch({
                type: ADD_USER, 
                payload: res.data
            })
        })
        .catch(err => {
           dispatch(returnError(err.response.data, err.response.status))
        })
}