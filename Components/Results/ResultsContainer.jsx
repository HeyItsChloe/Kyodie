import React, { Component } from 'react';
import Results from './Results.jsx';
var _ = require('lodash'); 

class ResultsContainer extends Component {
/* functionality to filter through search results here */
    render () {
        /**
         * here, data is an array of arrays.
         * we pass each index of data to results
          [
            0: [
                "Father & Son Insurance"
                "1000 Turk Hill Rd"
                "Fairport"
                "NY"
                "14450-8755"
                "43.095314"
                "-77.431131"
                ""
                ""
                undefined
                1undefined
                1"Organic"
                1"0.4731"
                ], 
          ]
         */
        let results = this.props.propsPassed.data;

        let resultArr = []
        for(let j=0; j<results.length; j++){
            resultArr.push(
                <Results key={j} business={results[j]} />
            )
        }

        return (
            <div className='resultsContainer'>
                <h1>Browse The Top Businesses In Your Area</h1>
                <div>
                {resultArr}
                </div>
            </div>
        )
    }
}

export default ResultsContainer