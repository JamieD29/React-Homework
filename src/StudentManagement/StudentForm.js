import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreateStudent, actionUpdateStudent } from "../Redux/actions/studentAction";
class StudentForm extends Component {
  state = {
    values: {
      studentID: "",
      name: "",
      phoneNumber: "",
      email: "",
    },
    errors: {
      studentID: "",
      name: "",
      phoneNumber: "",
      email: "",
    },
  };

  handleChange = (eve) => {
    const { name, value } = eve.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleBlur = (eve) => {
    const { name, value } = eve.target;
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: this.validation(name, value),
      },
    });
  };

  validation = (name, value) => {
    switch (name) {
      case "studentID": {
        if (!value.trim()) {
          return "*Mã số sinh viên không được để trống";
        }
        return "";
      }
      case "name": {
        if (!value.trim()) {
          return "*Họ tên không được để trống";
        }
        if (/[^A-Za-z ]/.test(value)) {
          return "*Họ tên không được có giá trị là số";
        }
        return "";
      }
      case "phoneNumber": {
        if (!value.trim()) {
          return "*Nhập số điện thoại";
        }
        if (!/^[0-9]*$/.test(value)) {
          return "*Số điện thoại chưa đúng";
        }
        if (value.length < 2 || value.length >= 11) {
          return "*Số điện thoại chỉ có 10 chữ số";
        }
        return "";
      }
      case "email": {
        if (!value.trim()) {
          return "*Email không được để trống";
        }
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
          return "*Email không đúng định dạng";
        }
        return "";
      }

      default:
        return "";
    }
  };

  handleSubmit = async (eve) => {
    eve.preventDefault();

    const { values } = this.state;
    const validationError = {};
    for (let key in values) {
      const error = this.validation(key, values[key]);
      if (error) {
        validationError[key] = error;
      }
    }

    if (Object.keys(validationError).length > 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          ...validationError,
        },
      });
      return;
    }

    const { id, ...payload } = values;

    if (id) {
      this.props.dispatch(actionUpdateStudent(id, payload));
    } else {
      this.props.dispatch(actionCreateStudent(payload));
    }

    this.setState({
      values: {
        studentID: "",
        name: "",
        phoneNumber: "",
        email: "",
      },
    });
  };

  render() {
    const { values, errors } = this.state;
    return (
      <div className="px-4">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="mb-3 col-6">
              <label className="form-label">Mã sinh viên</label>
              <input
                placeholder=". . ."
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                type="text"
                name="studentID"
                value={values.studentID}
                className="form-control shadow-sm"
              />
              {errors.studentID && (
                <span className="text-danger">{errors.studentID}</span>
              )}
            </div>
            <div className="mb-3 col-6">
              <label className="form-label">Họ Tên</label>
              <input
                placeholder=". . ."
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                type="text"
                name="name"
                value={values.name}
                className="form-control shadow-sm"
              />
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </div>
            <div className="mb-3 col-6">
              <label className="form-label">Số điện thoại</label>
              <input
                placeholder=". . ."
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                className="form-control shadow-sm"
              />
              {errors.phoneNumber && (
                <span className="text-danger">{errors.phoneNumber}</span>
              )}
            </div>
            <div className="mb-3 col-6">
              <label className="form-label">Email</label>
              <input
                placeholder=". . ."
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                type="email"
                name="email"
                value={values.email}
                className="form-control shadow-sm"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.student && this.props.student !== prevProps.student) {
      this.setState({
        values: { ...this.props.student },
      });
    }
  }
}

export default connect((state) => ({
  student: state.students.selectedStudent,
}))(StudentForm);
