import React, { Component } from 'react'
import './css/Banner.css';
export default class Banner extends Component {
  render() {
    return (
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="background">
        <h1>A WARM WELCOME !</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ex dignissimos possimus dolore. Error culpa repellendus fugiat ipsam officiis ipsum consectetur dignissimos aliquam similique laudantium.</p>
        <button type="button" className="btn btn-primary">Call to action!</button>
      </div>
    </div>
  </div>
</div>


    )
  }
}
