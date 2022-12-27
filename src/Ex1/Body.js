import React, { Component } from "react";
import Banner from './Banner';
import Items from './Items';
export default class Body extends Component {
    render() {
      return (
       <main className="container py-5">
        <Banner></Banner>
         <Items></Items>
       </main>
      )
    }
  }