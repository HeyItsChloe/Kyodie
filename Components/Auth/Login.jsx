import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import authStyles from './authStyles.scss';

class Login extends Component {
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
                            <input placeholder='userName' name="uname"></input><br></br>

                            <span>
                                <img className='pswd'
                                    src={require('../../assets/images/pswdIcon.png')}
                                    style={{width:'5%', height: '3%'}}>
                                </img>
                            </span>                            
                            <input type="password" placeholder='password' ></input><br></br>

                            <button className='authSubmit'>Login</button>  
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