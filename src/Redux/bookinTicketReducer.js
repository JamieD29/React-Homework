import { produce } from "immer";
import * as actionTypes from "./constants/bookinConstants";
const stateDefault = {
  selectedSeatList: [],
  total: 0,
};

const reducer = (state = stateDefault, { type, payload }) => {
 
  
  const newState = produce(state, (draft) => {
    switch (type) {
      case actionTypes.SELECT_SEAT_LIST: {
        let index = draft.selectedSeatList.findIndex(
          (selectedSeat) => selectedSeat.soGhe === payload.soGhe
        );
        if (index !== -1) {
          draft.selectedSeatList.splice(index, 1);
        } else {
          draft.selectedSeatList.push(payload);
        }
        draft.total = draft.selectedSeatList.reduce((acc, curr) => {
          const total = acc + curr.gia;
          return total;
        }, 0);
        break;
      }
      case actionTypes.DELETE_SEAT_LIST : {
        let index = draft.selectedSeatList.findIndex(
          (selectedSeat) => selectedSeat.soGhe === payload.soGhe
        );
        if (index !== -1) {
           draft.selectedSeatList.splice(index, 1);
        }
        draft.total = draft.selectedSeatList.reduce((acc, curr) => {
          const total = acc + curr.gia;
          return total;
        }, 0);
        break;
      }
      default: 
     
        return draft;
      
    }
  });

  return newState;
};

export default reducer;
