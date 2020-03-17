import React, { Component } from 'react';
import Results from './Results.jsx';
var _ = require('lodash'); 

class ResultsContainer extends Component {
//functionality to filter through search results here
    render () {
        let results = this.props.propsPassed.data;
        console.log('results in containier', results)

        let resultArr = []
        for(let j=0; j<results.length; j++){
            resultArr.push(
                <Results key={j} business={results} />
            )
        }

        return (
            <div className='resultsContainer'>
                <h1>List Results Here</h1>
                <div>
                {resultArr}
                </div>
            </div>
        )
    }
}

export default ResultsContainer