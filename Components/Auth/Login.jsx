import React, { Component } from 'react';

class Login extends Component {
    render () {
        return (
            <div>
                <h1>Login</h1>
                <input placeholder='userName'></input>
                <input placeholder='password'></input>
            </div>
        )
    }
}

export default Login