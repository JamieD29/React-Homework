import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {

renderProduct = () => 
this.props.products.map((item)=>
    <div className="col-3" key={item.id}>
        <ProductItem product = {item} showDetail={this.props.showDetail}></ProductItem>
    </div>
);



  render() {
    return (
      <div className="row mt-5">
        {/* <div className="col-3">
          <ProductItem></ProductItem>
        </div>
        <div className="col-3">
          <ProductItem></ProductItem>
        </div>
        <div className="col-3">
          <ProductItem></ProductItem>
        </div>
        <div className="col-3">
          <ProductItem></ProductItem>
        </div> */}

        {this.renderProduct()};

      </div>
    );
  }
}
