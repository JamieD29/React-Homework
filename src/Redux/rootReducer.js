import {combineReducers} from 'redux'; // Set up Redux
import { demoReducer } from './demoReducer'; // import Store cần dùng vào
import { cartReducer } from './cartReducer';

//Store tổng cho ứng dụng
export const rootReducer = combineReducers({ 
    //Nơi chứa các reducer cho nghiệp vụ (store con )
    demoReducer,
    cartReducer
});

