import {produce} from "immer";
import * as actionTypes from "./constants/studentConstants";

const initialState = {
    students:[],
    selectedStudent: null,
    isLoading: false,
    error: null,
};

const reducer = (state = initialState, {type, payload}) => {
    const newState = produce(state, (draft)=> {

        switch(type){
            case actionTypes.UPDATE_STUDENT_LIST_PENDING : {
                draft.isLoading= true;
                break;
            }
            case actionTypes.UPDATE_STUDENT_LIST_FULFILLED:{
                draft.students = payload;
                draft.isLoading = false;
                break;
            }
            case actionTypes.UPDATE_STUDENT_LIST_REJECTED:{
                draft.error = payload; 
                draft.isLoading = false;
                break;
            }
            case actionTypes.UPDATE_SELECTED_STUDENT: {
                draft.selectedStudent = payload;
                draft.isLoading = false;
                break;
            }

            default: return draft;
        }


    })
    return newState;
}

export default reducer;