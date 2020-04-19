import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import authStyles from './authStyles.scss';

class Login extends Component {
    handleLogin (event) {
        event.preventDefault()
        const userName = document.getElementById('userName').value
        const password = document.getElementById('password').value
        fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({userName: userName, password: password})
        })
        .catch(() => {
            if (err) {console.log('err in signup createUser post')}
        })
    }
    render () {
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
                            <input id='userName' placeholder='userName' name="uname"></input><br></br>

                            <span>
                                <img className='pswd'
                                    src={require('../../assets/images/pswdIcon.png')}
                                    style={{width:'5%', height: '3%'}}>
                                </img>
                            </span>                            
                            <input id='password' type="password" placeholder='password' ></input><br></br>

                            <button className='authSubmit' onClick={this.handleLogin} >Login</button>  
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

export default Login