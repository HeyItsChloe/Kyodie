import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/styles.scss';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

class Results extends Component {
    render () {
        let data = this.props.business;
        return (
            <div>
                <Header/>
                <div className="resultBoxes">
                    <div>
                        <p>Name: {data[0]} </p>
                        <p>Address: {data[1]} </p>
                        <p>City: {data[2]} </p>
                        <p>State: {data[3]} </p>
                        <p>Zip: {data[4]} </p>
                        <p>URL: {data[7]} </p>
                        <p>Image: {data[8]} </p>
                        <p>Category: {data[9]} </p>
                        <Link to={{
                        pathname:'/resultsDetails',
                        state:{business:data}
                        }}> <button>Show More Details</button> </Link> 
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };
};
export default Results;