import { w3cwebsocket as WSClient } from 'websocket';

import * as WsActionTypes from '../websocket/ActionTypes';
import * as WsActions from '../websocket/Actions';
import * as OrderActions from '../order/actions';

function WSMiddleware() {
    let socket = null;

    const onOpen = (storeAPI) => () => {
        let subscriptionMessage = JSON.stringify({
            event: 'subscribe',
            channel: 'book',
            symbol: 'tBTCUSD',
            prec: 'P0',
            // freq: 'F1'
        })
        socket.send(subscriptionMessage);
        storeAPI.dispatch(WsActions.wsConnected());
    }

    const onClose = (storeAPI) => () => {
        storeAPI.dispatch(WsActions.wsDisconnected());
    }

    const onMessage = (storeAPI) => (message) => {
        message = JSON.parse(message.data);
        if (message.event) return;
        if (message[1].length < 3) return;
        if (message[1].length > 3) {
            storeAPI.dispatch(OrderActions.OrderSnapshotReceived(message));
        } else {
            storeAPI.dispatch(OrderActions.OrderUpdateReceived(message));
        }
    }

    return (storeAPI) => {
        return (next) => {
            return (action) => {
                switch (action.type) {
                    case WsActionTypes.WS_CONNECT_REQUEST:
                        if (socket !== null) {
                            socket.close();
                        }

                        socket = new WSClient('wss://api-pub.bitfinex.com/ws/2');
                        socket.onopen = onOpen(storeAPI);
                        socket.onclose = onClose(storeAPI);
                        socket.onmessage = onMessage(storeAPI);
                        break;
                    default:
                        return next(action);
                }
            }
        }
    }
}

export default WSMiddleware();