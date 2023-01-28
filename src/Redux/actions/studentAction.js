import * as actionTypes from "../constants/studentConstants";
import axios from "axios";

//Fetch Student
export const actionFetchStudents = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.UPDATE_STUDENT_LIST_PENDING,
      });

      // const {searchTerm} = getState().userList;

      const res = await axios({
        method: "GET",
        url: "https://63d33170c1ba499e54bd2fce.mockapi.io/students",
        //   params: {
        //       username: searchTerm || undefined,
        //   }
      });

      dispatch({
        type: actionTypes.UPDATE_STUDENT_LIST_FULFILLED,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionTypes.UPDATE_STUDENT_LIST_REJECTED,
        payload: err.response.data || err.message,
      });
    }
  };
};

export const actionCreateStudent = (student) =>{
  return async (dispatch, getState) =>{
    try{
      await axios({
        method: "POST",
        url: "https://63d33170c1ba499e54bd2fce.mockapi.io/students",
        data: student,
      })
      dispatch(actionFetchStudents());
    }
    catch(err){
      console.log(err);
    }
  }
}

export const actionDeleteStudent = (studentId) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: "DELETE",
        url: "https://63d33170c1ba499e54bd2fce.mockapi.io/students/" + studentId,
      });
      alert("Xoá thành công");

      dispatch(actionFetchStudents());
    } catch (err) {
      console.log(err);
    }
  };
};

export const actionSelectedStudent = (studentId) => {
  return async (dispatch, getState) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://63d33170c1ba499e54bd2fce.mockapi.io/students/" + studentId,
      });

      dispatch({
        type: actionTypes.UPDATE_SELECTED_STUDENT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};


export const actionUpdateStudent = (id, student) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: "PUT",
        url: "https://63d33170c1ba499e54bd2fce.mockapi.io/students/" + id,
        data: student,
      });
      //call API update user thành công
      dispatch(actionFetchStudents());
    } catch (error) {
      console.log(error);
    }
  };
};