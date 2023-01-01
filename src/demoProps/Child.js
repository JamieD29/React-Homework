import React, { Component } from 'react'

//muốn truyền từ con sang cha phải có event xử lí

export default class Child extends Component {
 //  avatar ="abc.jpg";
  render() {
    return (
        <div className='bg-danger p-3 mb-4'>
        <h1>Child</h1>
        <h3>Name: {this.props.item.name}</h3>
        <h2>avatar: {this.props.item.avatar}</h2>
        <button className='btn btn-light' onClick={()=>this.props.setAvatar(this.props.item.avatar)}>Emit avatar</button>
        {/* <p>Email: {this.props.emailChild}</p>
        <p>Age: {this.props.ageChild}</p>
        <button className='btn btn-light' onClick={()=>this.props.setAvatar(this.avatar)}>Emit avatar</button> */}
      </div>
    )
  }
}
