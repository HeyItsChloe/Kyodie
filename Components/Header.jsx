import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <div>
                <div className="pageHeader">
                <h1>KYODIE</h1>
                <ul className="menuButtons">
                    <Link to={'/'}> <li>Home</li> </Link>
                    <Link to={'/about'}> <li>About</li> </Link>
                    <Link to={'/contact'}> <li>Contact</li> </Link>
                    <Link to={'/login'}> <li>Login</li> </Link>
                </ul> 
            </div>
            </div>
        )
    }
}

export default Header