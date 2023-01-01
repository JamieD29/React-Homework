import React, { Component } from 'react';
import Parent from './Parent';
import Uncle from './Uncle';

export default class GrandPa extends Component {
    email ="abc@gmail.com"
    age = 20
    //biến hứng dữ liệu từ con truyền ra

    state={selectedAvatar : "" };
    
    //hàm set biến hứng, tham số đầu vào dữ liệu từ còn truyền ra 
    setAvatar = (dataFromChild) => {
        this.setState({
            selectedAvatar: dataFromChild
    })

        console.log(this.state.selectedAvatar);
    }

  render() {
    return (
      <div className='bg-success p-3'>
        <h1>GrandPa</h1>
        
        <div className='d-flex'>
             <Parent email={this.email} age={this.age} setAvatar={this.setAvatar}/>
            
            <Uncle avatar={this.state.selectedAvatar}> </Uncle>
        </div>
       
      </div>
    )
  }
}
