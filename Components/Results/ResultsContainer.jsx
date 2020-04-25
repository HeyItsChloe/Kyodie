import React, { Component } from 'react';
import Results from './Results.jsx';

class ResultsContainer extends Component {
    render () {
        let results = this.props.propsPassed;
        let resultArr = []
        for(let j=0; j<results.length; j++){
            resultArr.push(
                <Results key={j} business={results[j]} />
            )
        };
        return (
            <div className='resultsContainer'>
                <h1>Browse The Top Businesses In Your Area</h1>
                <div>
                {resultArr}
                </div>
            </div>
        );
    };
};
export default ResultsContainer;