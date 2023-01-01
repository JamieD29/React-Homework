import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  
    //pros truyền giá trị của class Cha cho class Con
    // pros tại class Con không được phép chỉnh sửa

    childList =[
        {
            id: 1,
            name: "Tai",
            avatar: "tai.png"
        },{
            id: 2,
            name: "Dung",
            avatar: "dung.png"
        },{
            id: 3,
            name: "Nhu",
            avatar: "nhu.png"
        }
    ];

    renderChild = () => 
      this.childList.map((item)=>
         <Child key = {item.id} item={item} setAvatar = {this.props.setAvatar}/>
        );
    

    render() {
    return (
      <div className='bg-primary p-3 me-5'>
        <h1>Parent</h1>
        <p>Email: {this.props.email}</p>
        <p>Age: {this.props.age}</p>
        {/* <Child emailChild={this.props.email} ageChild ={this.props.age} setAvatar={this.props.setAvatar}/> */}
        {this.renderChild()}
      
      </div>
    )
  }
}
