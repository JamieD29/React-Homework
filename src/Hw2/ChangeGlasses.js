import React, { Component } from "react";

import styles from './css/ChangeGlasses.module.css';

export default class ChangeGlasses extends Component {
  glasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];


  state ={
    img_url: "./glassesImage/v1.png" ,
    glasses_name : "GUCCI G8850U", 
    glasses_price: 30,
    glasses_desc:"Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  };

  changeGlasses = (id) =>{

    let glassesPic, glassesName, glassesDesc, glassesPrice;

    for(let eachGlasses of this.glasses){
      if(id === eachGlasses.id){
        glassesPic = eachGlasses.url;
        glassesName = eachGlasses.name;
        glassesDesc = eachGlasses.desc;
        glassesPrice = eachGlasses.price
      }
    }
    this.setState({
      img_url: glassesPic,
      glasses_name: glassesName,
      glasses_price: glassesPrice,
      glasses_desc: glassesDesc
      
    })
  }

  renderGlasses = () => {
    const htmlArr = this.glasses.map((item) => {
      return (
        <div className="col-4 px-5" key={item.id}>
          <div className="container">
            <button className="btn" onClick={() => this.changeGlasses(item.id)}>
              <img src={item.url} className="w-100" alt="glassImg"></img>
            </button>
          </div>
        </div>
      );
    });

    return htmlArr;
  }

  render() {
    return <div className={styles.backgroundImg}>
      <div className={styles.header}>
        <div className="container">
          <p className="text-center fs-2">Try Glasses App</p>
        </div>
      </div>


      <div id="Model" className="container mt-5">
        <div className="row ">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="card position-relative" style={{ width: '18rem' }}>
              <img className="shadow-sm rounded " src="./glassesImage/model.jpg" alt="modelImg"/>

                {/*Trying glass and showing glass's info  */}
              <div className="card position-absolute bg-transparent border-0 " style={{top:'16px'}}>
              
                <div className="glassImg position-relative py-4 px-5 mt-5 ms-1">
                  <img className="w-100" src={this.state.img_url} alt="glassImg"></img>
                </div>

                <div className="card-body ">
                  <div className="container bg-dark bg-gradient bg-opacity-75">
                  <h4 className="text-white"> {this.state.glasses_name} </h4>
                  <span className="fst-italic text-light fs-5"> $ {this.state.glasses_price}</span>
                  <p className="text-light mt-1">{this.state.glasses_desc}</p>
                  </div>
                  
                </div>
              </div>

              {/* /////////////////////////////// */}
            </div>

          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="card" style={{ width: '18rem' }}>
              <img src="./glassesImage/model.jpg" alt="modelImg"/>
            </div>
          </div>
        </div>

      </div>

      <div id="Glasses" className="container py-5">
        <div className={styles.glasses_box}>
          <h1 className="mb-3"> Choosing glasses:</h1>
          <div className="row">

            {this.renderGlasses()}

          </div>
        </div>

      </div>

    </div>;


  }
}
