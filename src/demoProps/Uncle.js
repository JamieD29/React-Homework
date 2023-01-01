import React, { Component } from 'react'

export default class Uncle extends Component {


    

  render() {
    return (
        <div className='bg-info p-3'>
        <h1>Uncle</h1>
        <p>avatar: {this.props.avatar}</p>

      </div>
    )
  }
}
