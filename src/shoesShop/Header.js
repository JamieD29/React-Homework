import React, { Component } from 'react'
import logo from '../asset/img/sneaker_logo.png'
export default class Header extends Component {
  render() {
    return (
    <nav className="navbar navbar-expand-lg bg-dark shadow">
    <div className="container-fluid px-lg-5">
    <a className="navbar-brand ms-5"  href="#">
        <img className='w-100' src={logo}  style={{width: "100px", height: "100px"}}  alt="logo.png" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse ms-lg-5" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 ">
        <li className="nav-item text-white ">
          <a className="nav-link text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item text-white">
          <a className="nav-link text-danger " href="#">Sneakers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light" href="#">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light" href="#">About us</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    )
  }
}
