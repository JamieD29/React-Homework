import React, { Component } from 'react'
import { connect } from 'react-redux'
 class SearchStudent extends Component {
  render() {
    return (
        <div className="input-group w-25 ">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm trên MSV"
         
        />
        <button
          className="btn btn-primary fw-bold"
          type="button"
      
        >
          Tìm
        </button>
      </div>
    )
  }
}

export default connect()(SearchStudent);