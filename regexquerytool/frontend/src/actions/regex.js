import { ADD_TEXT_AND_REGEX, GET_ERRORS } from "./types";
import axios from 'axios'
import { createMessage } from './messages'

export const getRegexResult = () => dispatch => {
    axios.get('myview/')
        .then(res => {
            console.log(res, 'res');
            if(res.data === "Invalid regular expression"){
                dispatch(createMessage({ resultFail: res.data}))
            }
            if(res.data === "Valid regular expression"){
                dispatch(createMessage({ resultSuccess: res.data}))
            }
           
        })
        .catch(err => {
            console.log(err.response.data, 'err.response.data');
        })       
}

export const addRegex = (regex) => dispatch  => {
    console.log(regex.regex, 'regex.regex');
   
    axios.post('api/test/', regex)
            .then(res => {
                dispatch({
                    type: ADD_TEXT_AND_REGEX, 
                    payload: res.data
                })
                console.log(res.data, 'res.data22222');
            })
            .catch(err => {
                const errors = {
                    msg: err.response.data, 
                    status: err.response.data
                }
                dispatch({
                    type: GET_ERRORS, 
                    payload: errors
                })
                console.log(err.response.data, 'err.response.data');
            })
}
