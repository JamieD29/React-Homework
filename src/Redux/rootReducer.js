import {combineReducers} from 'redux'; // Set up Redux
import BookinTickerReducer from './bookinTicketReducer';

export const rootReducer = combineReducers({ 
    selectedSeats:BookinTickerReducer
});

