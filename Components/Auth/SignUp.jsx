import React, { Component } from 'react';

class SignUp extends Component {
    render () {
        return  (
            <div>
                <h1>Make An Account Here</h1>
                <input placeholder='userName'></input>
                <input placeholder='password'></input>
            </div>
        )
    }
}

export default SignUp;