import React, { Component } from 'react'

export default class State extends Component {
    

    state = {
        isLogin: false
    };

    login = () =>{
        this.setState({
            isLogin: true
        })
    }

    logout = () =>{
        this.setState({
            isLogin: false
        })
    }

    renderNav = () => {
        if (this.state.isLogin ) {
            return (
                <div>
                    <h4>Xin chào !!</h4>
                    <button onClick={this.logout}>Đăng xuất</button>
                </div>

            );
        } else {
            return (
                <div>
                    <button>Đăng ký</button>
                    <button onClick={this.login}>Đăng nhập</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>

                <h1>Demo State</h1>

                {this.renderNav()}

            </div>
        )
    }
}
