import React, { Component } from 'react'

import { connect } from 'react-redux'

 class DemoCart extends Component {
  products = [ {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 465,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 542,
    image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
  }];
  
  
    render() {
        const {cart, dispatch} = this.props;
    return (
        
      <div className='row'>
        <h1 className='text-center'>Cart: <span> {cart.length} </span></h1>

      {this.products.map((item,index)=>{
        return (
            <div className="col-4" key={index}>
                <div className="card">
                    <img src={item.image} className="w-50" alt="" />
                    <div className="card-body">
                        <h4>{item.name}</h4>
                        <button className='btn btn-success' 
                        onClick={()=> dispatch({
                            type:"THEM_GIO_HANG",
                            payload: item
                        })}>Add</button>
                    </div>
                </div>
            </div>
        )
      })}</div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      cart: state.cartReducer.cart
    };
  };
  
export default connect(mapStateToProps, null)(DemoCart);