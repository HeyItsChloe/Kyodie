import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import authStyles from './authStyles.scss';

class Login extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            userNameLogin: '',
            passwordLogin: '',
            loggingIn: false
        };
       this.getUserInput = this.getUserInput.bind(this);
    }; 
    
    getUserInput () {
        this.setState({
            userNameLogin: document.getElementById('userName').value,
            passwordLogin: document.getElementById('password').value,
            loggingIn: true
        });
    };

    render () {
        let loggingIn = this.state.loggingIn;
        let userNameLogin = this.state.userNameLogin;
        let passwordLogin = this.state.passwordLogin;
        return (
            <div>
                <div className='authHeader'>
                    <Header/>
                </div>
                <img className='backgroundImg'
                    src={require('../../assets/images/ideas.jpg')}
                    style={{width:'90%', height:'90%'}}
                >
                </img>
                <form className='authForm'>
                    <div className="container">
                        <div>
                            <h3>LOGIN TO YOUR ACCOUNT</h3>
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
                                state: {userNameLogin: userNameLogin, passwordLogin:passwordLogin, loggingIn:loggingIn}
                                }}> <button className='authSubmit' >Login</button>  </Link>
                        </div>
                        <div className='signupArea'>
                            <label>No Account? Create Account Here  </label>
                            <Link to={'/signup'}> <button className='signupSubmit'>SignUp</button> </Link>
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
export default Login;