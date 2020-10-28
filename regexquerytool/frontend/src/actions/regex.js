import { GET_REGEX_RESULT, CREATE_MESSAGE } from "./types";
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
            console.log(err, 'err');
        })       
}
