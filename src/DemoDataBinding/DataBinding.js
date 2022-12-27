import React, { Component } from 'react'

export default class DataBinding extends Component {
  
    fullName ="Jamie";
    age = 18;

    ShowInfo () {
        const email = "jam@gmail.com";
        return this.fullName + " " + this.age + " " + email;
    }

    showMessage(){
        alert('Hello World');
    }
    //function có tham số 
    showMessage2(message){
        
        alert(message);
    }

    //function có this (dùng arrow func khi có event handler)
    //arrow func không có con trỏ this
    showMessage3 = () => {
        console.log(this);
        alert(this.fullName);
    }

    render() {
    return (
      <div>
      
      <h1>
      Tên: {this.fullName}
      </h1>
        <h2>
            Tuổi: {this.age}
        </h2>
      <h3>
      {this.ShowInfo()}
      </h3>

      <button onClick={this.showMessage}>Show Message 1</button>
      <button onClick={() => { this.showMessage2("Hello World 2");}}> Show Message 2</button>
      
      <button onClick={this.showMessage3}>Show Message 3</button>
      </div>
    )
}
}
