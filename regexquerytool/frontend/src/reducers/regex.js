import { ADD_TEXT_AND_REGEX, CREATE_MESSAGE } from '../actions/types'

const initialState = {
    regex: []
}

export default function(state = initialState, action){
    switch(action.type){
        case CREATE_MESSAGE: 
            return action.payload

        case ADD_TEXT_AND_REGEX: 
            return {
                ...state, 
                regex : [...state.regex, action.payload]
            }

        default: 
            return state    
    }
}