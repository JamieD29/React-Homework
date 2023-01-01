import React, { Component } from 'react'

export default class ProductDetail extends Component {
  


    
  
    render() {
        const {name, price, image, description, quantity} = this.props.selectedProduct;
    return (
      <div className='card p-4 mt-5'>
        <div className='row'>
            <div className='col-5'>
                <img src={image} alt='prod.jpg'></img>
            </div>

            <div className='col-7'>
                <h2>Tên: {name}</h2>
                <hr/>
                <h4>Giá: ${price}</h4>
                <hr/>
                <h4>Mô tả: {description}</h4>
                <hr/>
                <h4>Số lượng: {quantity}</h4>
                <hr/>
                
            </div>
        </div>
      </div>
    
    )
  }
}
