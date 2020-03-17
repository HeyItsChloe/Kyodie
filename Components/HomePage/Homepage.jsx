import React, { Component } from 'react';
import SearchBar from '../SearchBar.jsx';
import { Link } from 'react-router-dom';

class Homepage extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <h1>KYODIE</h1>
                    <ul className="menuButtons">
                        <Link to={'/'}> <li>Home</li> </Link>
                        <Link to={'/about'}> <li>About</li> </Link>
                        <Link to={'/contact'}> <li>Contact</li> </Link>
                    </ul> 
                </div>

                <div>
                    <SearchBar/>
                </div>
            </div>
        )
    }
}

export default Homepage