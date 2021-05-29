import * as OrderActionTypes from './actionTypes';

const initialState = {
    BOOK: { 
        BIDS: [], 
        ASKS: [], 
    }
}

function sortBook(book) {
    for (let key of ['BIDS', 'ASKS']) {
        
        book[key].sort((obj1, obj2)=>{
            return obj1.total < obj2.total ? -1 : 1;
        })
    }
}

function transformToProcess(book){
    let outBook = {};
    ['BIDS', 'ASKS'].forEach(key=>{
        outBook[key] = {};
        book[key].forEach(order=>{
            outBook[key][order.price] = order;
        })
    });
    return outBook;
}

function transformToSave(book){
    let outBook = {};
    ['BIDS', 'ASKS'].forEach(key=>{
        outBook[key] = [];
        for(let idx in book[key]){
            outBook[key].push(book[key][idx]);
        }
    });
    return outBook;
}

export function Reducer(state = initialState, action) {
    let NEW_BOOK = {};
    switch (action.type) {
        case OrderActionTypes.ORDER_SNAPSHOT_RECEIVED:

            NEW_BOOK = { BIDS: [], ASKS: [] };
            action.payload[1].forEach(order => {
                const [PRICE, COUNT, AMOUNT] = order;
                const SIDE = AMOUNT > 0 ? 'BIDS' : 'ASKS';
                NEW_BOOK[SIDE].push({ count: COUNT, amount: Math.abs(AMOUNT), total: Math.abs(AMOUNT), price: PRICE });
            });
            
            sortBook(NEW_BOOK);

            return {
                ...state,
                BOOK: NEW_BOOK
            }
        case OrderActionTypes.ORDER_UPDATE_RECEIVED:

            const [PRICE, COUNT, AMOUNT] = action.payload[1];
            NEW_BOOK = transformToProcess(JSON.parse(JSON.stringify(state.BOOK)));

            if (COUNT > 0) {

                const SIDE = AMOUNT > 0 ? 'BIDS' : 'ASKS';
                if (!NEW_BOOK[SIDE][PRICE]) {
                    NEW_BOOK[SIDE][PRICE] = { count: COUNT, amount: Math.abs(AMOUNT), total: Math.abs(AMOUNT), price: PRICE };
                }
                NEW_BOOK[SIDE][PRICE]['total'] += Math.abs(AMOUNT);
            } else {

                const SIDE = AMOUNT == 1 ? 'BIDS' : 'ASKS';
                delete NEW_BOOK[SIDE][PRICE];
            }

            NEW_BOOK = transformToSave(NEW_BOOK);
            sortBook(NEW_BOOK);
            
            return {
                ...state,
                BOOK: NEW_BOOK
            }
        default:
            return state;
    }
}