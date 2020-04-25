import React, { Component } from 'react';
import SearchBar from '../SearchBar.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

class Homepage extends Component {
    render () {
        return (
            <div>
                <div>
                    <Header/>
                    <SearchBar/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Homepage;