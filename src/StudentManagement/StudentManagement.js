import React, { Component } from 'react'
import UserForm from './StudentForm'
import UserList from './StudentList'
import { connect } from 'react-redux'
import { actionFetchStudents } from '../Redux/actions/studentAction'
 class StudentManagement extends Component {
  render() {
    return (
      <div>
        <div className='title'>
            <p className='fs-1 fw-bold bg-dark bg-gradient text-center p-3 text-light'>Quản lý sinh viên</p>
        </div>
        <UserForm/>
        <UserList/>
      </div>
    )
  }

  componentDidMount(){
   this.props.dispatch(actionFetchStudents());
  }
}

export default connect((state)=>({
  studentList: state.students.students,
}))(StudentManagement);
