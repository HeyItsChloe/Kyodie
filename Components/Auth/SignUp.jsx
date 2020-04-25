import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import authStyles from './authStyles.scss';

class SignUp extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            signingUp: false,
            userNameSignup: '',
            passwordSignup: ''
        };
        this.getUserInput = this.getUserInput.bind(this);
    };

    getUserInput () {
        this.setState({
            userNameSignup: document.getElementById('userName').value,
            passwordSignup: document.getElementById('password').value,
            signingUp: true
        });
    };

    render () {
        let signingUp = this.state.signingUp;
        let userNameSignup = this.state.userNameSignup;
        let passwordSignup = this.state.passwordSignup;
        return (
            <div>
                <div className='authHeader'>
                    <Header/>
                </div>
                <img className='backgroundImg'
                    src={require('../../assets/images/ideas.jpg')}
                    style={{width:'90%', height:'85%'}}
                >
                </img>
                <form className='authForm'>
                    <div className="container">
                        <div>
                            <h3>Create An Account</h3>
                            <span>
                                <img className='unameIcon'
                                    src={require('../../assets/images/unameIcon.png')}
                                    style={{width:'5%', height: '3%'}}>
                                </img>
                            </span>
                            <input id='userName' placeholder='userName' name="uname" onChange={this.getUserInput}></input><br></br>
                            <span>
                                <img className='pswd'
                                    src={require('../../assets/images/pswdIcon.png')}
                                    style={{width:'5%', height: '3%'}}>
                                </img>
                            </span>                            
                            <input id='password' type="password" placeholder='password' onChange={this.getUserInput}></input><br></br>
                            <Link to={{
                                    pathname:'/profile',
                                    state: {userNameSignup: userNameSignup, passwordSignup:passwordSignup, signingUp:signingUp}
                                    }}> <button className='authSubmit'>SignUp</button> </Link>  
                        </div>
                    </div>
                </form>
                <div className='authFooter'>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default SignUp;