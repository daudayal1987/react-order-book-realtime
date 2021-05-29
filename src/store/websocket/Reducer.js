import * as actionTypes from './ActionTypes';

const initialState = {
    connected: false
}

export function Reducer(state = initialState, action){
    switch(action.type){
        case actionTypes.WS_CONNECT_SUCCESS:
            return {
                ...state,
                connected: true
            }
        case actionTypes.WS_DISCONNECTED:
            return {
                ...state,
                connected: false
            }
        default:
            return state;
    }
}