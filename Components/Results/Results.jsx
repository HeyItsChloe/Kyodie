import React, { Component } from 'react';
import styles from '../../assets/css/styles.scss'

class Results extends Component {
    //render the boxes here

    render () {
        /**
         * here, data is an array of strings for each business
         *  [
                0: "Father & Son Insurance"
                1: "1000 Turk Hill Rd"
                2: "Fairport"
                3: "NY"
                4: "14450-8755"
                5: "43.095314"
                6: "-77.431131"
                7: ""
                8: ""
                9: undefined
                10: undefined
                11: "Organic"
                12: "0.4731"
            ]
         */ 
        let data = this.props.business

        return (
            <div>
                <div className="resultBoxes">
                    <div>
                        <p>Name: {data[0]} </p>
                        <p>Address: {data[1]} </p>
                        <p>City: {data[2]} </p>
                        <p>State: {data[3]} </p>
                        <p>Zip: {data[4]} </p>
                        <p>Latitude: {data[5]} </p>
                        <p>Longitude: {data[6]} </p>
                        <p>URL: {data[7]} </p>
                        <p>Image: {data[8]} </p>
                        <p>Category: {data[9]} </p>
                        <p>CategoryID: {data[10]} </p>
                        <p>Type: {data[11]} </p>
                        <p>Miles: {data[12]} </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Results