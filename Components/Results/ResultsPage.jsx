import React, { Component } from 'react';
import ResultsContainer from './ResultsContainer.jsx';

class ResultsPage extends Component {
    render () {
        return (
            <div className='resultsPage'>
                <div className="header">
                    <h1>Browse The Top Businesses</h1>
                    {/* <div>{console.log('quote in results page', this.props.props.name)}</div> */}
                </div>

                <div>
                    <ResultsContainer propsPassed={this.props.props}/>
                </div>
            </div>
        )
    }
}

export default ResultsPage;