import { combineReducers } from 'redux'; 
import users from './users'
import errors from './errors'
import messages from './messages'
import regex from './regex'

export default combineReducers({
    users, 
    errors,
    messages,
    regex
})