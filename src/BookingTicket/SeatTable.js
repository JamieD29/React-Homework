import React, { Component } from "react";
import styles from "./css/BookingTicket.module.css";
import Swal from "sweetalert2";
import { deleteSeat } from "../Redux/actions/bookinActions";
import { connect } from "react-redux";
class SeatTable extends Component {
  renderListTable = () => {
    return this.props.selectedSeatList.map((seat, index) => {
      const { soGhe, gia } = seat;
      return (
        <tr key={index}>
          <td>{soGhe}</td>
          <td>{gia.toLocaleString("en-US")}</td>
          <td>
            <button
              onClick={() => {
                this.handleDelete(seat);
              }}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    });
  };

  handleDelete = (seat) => {
    this.props.dispatch(deleteSeat(seat));
  };

  // handlePayment = () =>{
  //   for(let seatData of this.props.seatData){
  //     const tempSeatData = seatData;
  //     for(let selectedSeat of this.props.selectedSeatList){
  //       // const tempSeat = seatData.danhSachGhe.find((seat)=> seat.soGhe === selectedSeat.soGhe);
  //       for (let index in tempSeatData.danhSachGhe){
  //         if(tempSeatData.danhSachGhe[index].soGhe === selectedSeat.soGhe){

  //           tempSeatData.danhSachGhe[index].daDat = true;
  //         }
  //         seatData = {...tempSeatData};
  //       }
  //       }
  //   }

  // };

  render() {
    return (
      <div className="">
        {/*Type of seat  */}
        <div className="mt-4">
          <button className={`${styles.gheDuocChon}`}></button>
          <span className="text-light fs-3 fw-bold ms-1">Reserved</span>
          <br />
          <button className={`${styles.gheDangChon} my-3`}></button>
          <span className="text-light fs-3 fw-bold ms-1">Selected</span>
          <br />
          <button
            className={`${styles.gheDangChon} bg-light border-0`}
          ></button>
          <span className="text-light fs-3 fw-bold ms-1">Available</span>
        </div>

        {/* Table your selected seats */}

        <div className="mt-5">
          <table className="table table-dark table-striped  " border={2}>
            <thead>
              <tr className="fs-5">
                <th scope="col">Seat</th>
                <th scope="col">Price</th>
                <th scope="col">Option</th>
              </tr>
            </thead>
            <tbody>
              {this.renderListTable()}
              <tr>
                <td>Total</td>
                <td>{this.props.total.toLocaleString("en-US")}</td>
                <td>
                  <button
                    onClick={()=>{
                      Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Payment is success",
                      showConfirmButton: false,
                      timer: 1500,
                    })
                    }}
                    className="btn btn-primary"
                  >
                    Payment
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  selectedSeatList: state.selectedSeats.selectedSeatList,
  total: state.selectedSeats.total,
}))(SeatTable);
