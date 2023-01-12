import React, { Component } from 'react'
import styles from './css/Item.module.css'

export default class ProductItem extends Component {
  render() {
    return (
      <div className='card mt-5 shadow'>
        <div className={styles.cardImage}>
          <img className='w-100' src={this.props.product.image} alt='prod.jpg'></img>
        </div>
        <div className='card-body'>
          <div className={styles.stuffName}>
            <h4>{this.props.product.name}</h4>
          </div>
            

            <h5>${this.props.product.price}</h5>

            <div className='d-flex'>
            <button className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#detailModal" onClick={()=>this.props.showDetail(this.props.product)}>More details</button>
            <button className='btn btn-danger ms-1' onClick={()=> this.props.addToCart(this.props.product)}>Add to Cart</button>
            </div>
          
        </div>

      </div>
    )
  }
}
