import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from '../assets/css/styles.scss';

class Contact extends Component {
    render () {
        return  (
            <div>
                <Header/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm'>
                            <img className='contactPic'
                                src={require('../assets/images/car-comp.jpg')}>
                            </img>
                        </div>
                        <div id='rightColumn' className='col-sm'>
                            <div className='contactText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum. <br></br> <br></br>
                            </div>
                            <form className='contactForm'>
                                <input placeholder='full name'></input>
                                <input placeholder='phone number'></input>
                                <input placeholder='email'></input>
                                <textarea placeholder='message'></textarea>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;