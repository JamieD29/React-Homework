import React, { Component } from "react";
import styles from "./css/BookingTicket.module.css";
import { connect } from "react-redux";
import {selectedSeat} from "../Redux/actions/bookinActions";
 class SeatRow extends Component {
  renderEachSeat = () => {
    return this.props.seat.danhSachGhe.map((seat, index) => {
      const { soGhe, gia, daDat } = seat;
      let disabledValue = false;
      let cssReservedSeat = "";

      if (seat.daDat) {
        cssReservedSeat = styles.reserved;
        disabledValue = true;
      }

      let cssSelected = "";
      let indexSelectedSeat =this.props.selectedSeatList.findIndex((selected)=> selected.soGhe === soGhe)
      if(indexSelectedSeat !== -1){
        cssSelected= styles.selected;
      }

      return (
        <button disabled={disabledValue} onClick={()=>this.handleSelectedSeat(seat)} className={`${styles.ghe} ${cssReservedSeat} ${cssSelected} shadow`} key={index}>
          {soGhe}
        </button>
      );
    });
  };

  handleSelectedSeat = (seat) =>{
     this.props.dispatch(selectedSeat(seat));
  }

  renderNumberSeat = () => {
    return this.props.seat.danhSachGhe.map((seat, index)=> {
        return <span className={`${styles.rowNumber}`} key={index}>
            {seat.soGhe}
        </span>
    })
  }

  renderSeatArrow = () => {
    if(this.props.seat.hang === ""){
        return(
            <div className="d-flex " key={this.props.seat.hang}>
        <div className={`${styles.seatArrow}`}>{this.props.seat.hang} </div>

        {this.renderNumberSeat()}
      </div>
        )
    }
    return (
      <div className="d-flex "  key={this.props.seat.hang}>
        <div className={`${styles.seatArrow}`}>{this.props.seat.hang} </div>

        {this.renderEachSeat()}
      </div>
    );
  };

  render() {
    return (
      <div className="text-light text-start mt-4 ms-5 fs-4">
        {this.renderSeatArrow()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedSeatList: state.selectedSeats.selectedSeatList,
  }
}

export default connect(mapStateToProps)(SeatRow);