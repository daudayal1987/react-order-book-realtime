import { createStore, applyMiddleware } from 'redux';
import WSMiddleware from './middlewares/WSMiddleware';
import RootReducer from './RootReducer';

const Store = createStore(RootReducer, applyMiddleware(WSMiddleware));
export default Store;