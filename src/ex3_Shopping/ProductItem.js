import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    return (
      <div className='card mt-4'>
        <img className='w-100' src={this.props.product.image} alt='prod.jpg'></img>

        <div className='card-body'>
            <h4>{this.props.product.name}</h4>
            <h5>${this.props.product.price}</h5>

            <div className='d-flex'>
            <button className='btn btn-outline-primary' onClick={()=>this.props.showDetail(this.props.product)}>Chi tiết</button>
            <button className='btn btn-warning ms-4' onClick={()=> this.props.addToCart(this.props.product)}>Thêm vào giỏ</button>
            </div>
          
        </div>

      </div>
    )
  }
}
