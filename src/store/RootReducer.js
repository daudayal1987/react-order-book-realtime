import { combineReducers } from 'redux';

import { Reducer as WebSocketReducer } from './websocket/Reducer';
import { Reducer as OrderReducer } from './order/Reducer'

const RootReducer = combineReducers({ webSocket: WebSocketReducer, order: OrderReducer });

export default RootReducer;