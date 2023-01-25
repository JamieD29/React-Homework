import React, { Component, Fragment } from "react";
import styles from "./css/BookingTicket.module.css";
import SeatRow from "./SeatRow";
import SeatTable from "./SeatTable";
import seatData from '../Data/seatList.json';
import Footer from "./Footer";

export default class BookingTicket extends Component {
  
  renderSeatRow = () =>{
    return seatData.map((seats, index)=>
      <Fragment key={index}>
        <SeatRow seat={seats}/>
    </Fragment>
    )
  }
  
  render() {
    return (
      <div
        style={{
        
          width: "100%",
          height: "100%",
         // backgroundImage: "url('./bg/bgmovie.jpg')",
          backgroundSize: "100%",
          backgroundColor:"#7286D3",
        
        }}
      >
    
          <div className="row" style={{maxWidth: "1450px"}}>
            <div className="col-8 text-center">
              <h1 className="text-light fs-1 text-shadow" style={{textShadow: "#3d3d3dcf 0px 2px"}}>Booking Movie Ticket </h1>
              
              <div
                className="cover_screen mt-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div className={`${styles.screen} position-relative`}>
                <h5 className="mt-2 position-absolute top-50 start-50" style={{color:"grey", fontSize: "25px"}}>Screen</h5>
                </div>
               
              </div> 
              <div className={`${styles.seats}`}>
                 {this.renderSeatRow()}
              </div>
              
            </div>
            <div className="col-4" >
              <h1 className="text-light text-shadow" style={{textShadow: "#3d3d3dcf 0px 2px"}}>Your seats</h1>
              <SeatTable/>
            </div>
          </div>
      
        <Footer/>
      </div>
    );
  }
}
