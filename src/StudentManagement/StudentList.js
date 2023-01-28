import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  actionFetchStudents, 
  actionDeleteStudent,
  actionSelectedStudent
} from '../Redux/actions/studentAction';
import SearchStudent from "./SearchStudent";
 class StudentList extends Component {



  renderTable = () => {
    const {studentList, loading, error} = this.props;
    if(loading){
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    if(error){
      return <h1>{error}</h1>;
    }
    return studentList.map((item, index)=>{
      const {studentID, name, phoneNumber, email, id} = item;
      return (
        <tr key={id}>
        <td>{index + 1}</td>
        <td>{studentID}</td>
        <td>{name}</td>
        <td>{phoneNumber}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-primary me-3" onClick={()=>{this.handleSelected(id)}}>Edit</button>
          <button className="btn btn-outline-danger" onClick={()=>{this.handleDelete(id)}}>Delete</button>
        </td>
      </tr>
      )
    })
  }


  handleDelete = (id) => {
    this.props.dispatch(actionDeleteStudent(id));
  }

  handleSelected = (id) => {
   this.props.dispatch(actionSelectedStudent(id))
  }

  render() {
    return (
      <div className="mt-5">
        <div className="listTitle p-3 d-flex justify-content-between bg-secondary bg-gradient ">
          <p className="text-light fs-4 fw-bold m-0">Danh sách sinh viên</p>
          <SearchStudent/>
        </div>
        <div className="studentTable ">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã sinh viên</th>
                <th>Họ Tên</th>
                <th>SĐT</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.renderTable()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect((state)=> ({
  studentList: state.students.students,
  loading: state.students.isLoading,
  error: state.students.error,
}))(StudentList);