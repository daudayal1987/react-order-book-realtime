import * as OrderActionTypes from './actionTypes';

export const OrderUpdateReceived = (payload) => {
    return {
        type: OrderActionTypes.ORDER_UPDATE_RECEIVED,
        payload
    }
}

export const OrderSnapshotReceived = (payload) => {
    return {
        type: OrderActionTypes.ORDER_SNAPSHOT_RECEIVED,
        payload
    }
}