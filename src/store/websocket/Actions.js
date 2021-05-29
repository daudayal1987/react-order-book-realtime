import * as actions from './ActionTypes';

export const wsConnect = () => {
    return {
        type: actions.WS_CONNECT_REQUEST
    }
}

export const wsConnected = () => {
    return {
        type: actions.WS_CONNECT_SUCCESS
    }
}

export const wsDisconnected = () => {
    return {
        type: actions.WS_DISCONNECTED
    }
}