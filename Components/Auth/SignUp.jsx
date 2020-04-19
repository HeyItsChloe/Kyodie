import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import authStyles from './authStyles.scss';

class SignUp extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            isLoggedIn: false,
            userName: '',
            password: ''
        }
        this.createUser = this.createUser.bind(this)
    }

    createUser (event) {
        event.preventDefault()
        const userName = document.getElementById('userName').value
        const password = document.getElementById('password').value
        fetch('/api/user/signup/:id', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({userName: userName, password: password})
        })
        .then(() => {
            this.setState({
                isLoggedIn: true,
                userName: userName,
                password: password
            })
        })
        .catch(() => {
            if (err) {console.log('err in signup createUser post')}
        })
    }

    render () {
        let isLoggedIn = this.state.isLoggedIn
        let userName = this.state.userName
        let password = this.state.password
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
                            <input id='userName' placeholder='userName' name="uname"></input><br></br>
                            <span>
                                <img className='pswd'
                                    src={require('../../assets/images/pswdIcon.png')}
                                    style={{width:'5%', height: '3%'}}>
                                </img>
                            </span>                            
                            <input id='password' type="password" placeholder='password' ></input><br></br>
                            <button className='authSubmit' onClick={this.createUser} >SignUp</button>  
                            <div className='col-sm'>
                                {isLoggedIn ? 
                                    <div>
                                    <Link to={{
                                    pathname:'/profile',
                                    state: {userName: userName, password:password}
                                    }}> <button >Go To Profile</button> </Link>
                                    </div>
                                : null}
                            </div>
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

export default SignUp