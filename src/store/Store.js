import { createStore, applyMiddleware } from 'redux';
import WSMiddleware from './middlewares/WSMiddleware';
import RootReducer from './RootReducer';

import {saveState, loadState} from './localStorage';

const Store = createStore(RootReducer, loadState(), applyMiddleware(WSMiddleware));

Store.subscribe(() => {
    saveState({
        order: Store.getState().order
    });
});

export default Store;