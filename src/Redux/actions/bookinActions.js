import * as actionTypes from '../constants/bookinConstants';

export const selectedSeat = (seat) => {
    return {
        type: actionTypes.SELECT_SEAT_LIST,
        payload: seat
    }
}

export const deleteSeat = (seat) => {
    return {
        type: actionTypes.DELETE_SEAT_LIST,
        payload: seat
    }
}

export const payment = () => {
    return {
        type: actionTypes.PAYMENT_SEAT_LIST,
        
    }
}