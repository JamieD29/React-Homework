import {combineReducers} from 'redux'; // Set up Redux
import studentReducer from './studentReducer';

//Store tổng cho ứng dụng
export const rootReducer = combineReducers({ 
    //Nơi chứa các reducer cho nghiệp vụ (store con )
    students : studentReducer,
    
});

