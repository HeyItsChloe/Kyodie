import React, { Component } from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import styles from '../../assets/css/styles.scss';

class ResultsDetails extends Component {
    render () {
        let data = this.props.location.state.business
        return (
            <div>
                <Header/>
                <div>
                    <h2>More Info on "{`${data[0]}`}"</h2>
                    <div  className='resultBoxes'>
                        <p>Latitude: {data[5]} </p>
                        <p>Longitude: {data[6]} </p>
                        <p>CategoryID: {data[10]} </p>
                        <p>Type: {data[11]} </p>
                        <p>Miles: {data[12]} </p>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };
};
export default ResultsDetails;