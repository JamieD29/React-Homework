import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUpdateSearchTerm } from "../Redux/actions/studentAction";
class SearchStudent extends Component {
  state = {
    searchTerm: "",
  };

  handleSearch = () => {
    this.props.dispatch(actionUpdateSearchTerm(this.state.searchTerm));
  };

  handleChange = async (eve) => {
    await this.setState({ searchTerm: eve.target.value });
    await this.props.dispatch(actionUpdateSearchTerm(this.state.searchTerm));
  };

  render() {
    return (
      <div className="input-group w-25 ">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm trên MSV"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-primary fw-bold"
          type="button"
          onClick={this.handleSearch}
        >
          Tìm
        </button>
      </div>
    );
  }
  //   componentDidUpdate(){
  //     this.props.dispatch(actionUpdateSearchTerm(this.state.searchTerm));
  //   }
}

export default connect()(SearchStudent);
