import React, { Component } from 'react'

import BlackCar from '../assets/products/black-car.jpg';

import RedCar from '../assets/products/red-car.jpg';

import SilverCar from '../assets/products/silver-car.jpg';

import SteelCar from '../assets/products/steel-car.jpg';


import styles from './Cars.module.css';

export default class Car extends Component {

    

    state = {
        carImg: BlackCar
    };


    changeCar = (param) =>{
        if(param === "red"){
            this.setState({
                carImg: RedCar
            })
        }else if(param === "silver"){
            this.setState({
                carImg: SilverCar
            })
        }else if(param === "steel"){
            this.setState({
                carImg: SteelCar
            })
        }else if(param === "black"){
            this.setState({
                carImg: BlackCar
            })
        }
    }


  render() {
    return (
   <div className="container mt-5">
  <div className="row">
    <div className="col-7">
      <img style={{borderRadius:"20px", boxShadow:"4px 6px 10px 0px rgba(0,0,0,0.5)"}} src= {this.state.carImg} className={styles.thumbnail} alt="Black Car"/>
    </div>
    <div className="col-5">
      <button onClick={() => this.changeCar("black")} className="btn me-3 btn-dark">Black</button>
      <button onClick={() => this.changeCar("red")} className="btn me-3 btn-danger">Red</button>
      <button onClick={() => this.changeCar("silver")} className="btn me-3 btn-secondary">Silver</button>
      <button onClick={() => this.changeCar("steel")} className="btn bg-secondary bg-gradient">Steel</button>
    </div>
  </div>
</div>

    )
  }
}
