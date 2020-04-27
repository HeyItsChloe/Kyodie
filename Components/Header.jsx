import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Header extends Component {
    render () {
        return (
            <div>
                <div className="pageHeader">
                <h1>KYODIE</h1>
                {/* <ul className="menuButtons">
                    <Link to={'/'}> <li>Home</li> </Link>
                    <Link to={'/about'}> <li>About</li> </Link>
                    <Link to={'/contact'}> <li>Contact</li> </Link>
                    <Link to={'/login'}> <li>Login</li> </Link>
                </ul>  */}
                <Button>Open Menu</Button>
                <Menu>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                </div>
            </div>
        )
    }
}
export default Header;