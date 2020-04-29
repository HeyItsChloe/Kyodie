import React, { Component } from 'react';
import ResultsContainer from './ResultsContainer.jsx';
import axios from 'axios';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

class ResultsPage extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            data: []
        }
    this.getResults = this.getResults.bind(this);
    };

    componentWillMount () {
        this.getResults();
    };

    getResults () {
        let category = this.props.location.state.category;
        let keyword = this.props.location.state.keyword;
        let postalCode = this.props.location.state.postalCode;
        const fetching =(category, keyword, postalCode) => { 
            let url = `https://trialapi.soleo.com/businesses?Category=${category}&Keyword=${keyword}&PostalCode=${postalCode}&APIKey=e56x4kzx7bh54p8z6tj53t48`
            axios.get (url)
            .then(res => {
                let data = res.data.businesses
                let datum = []
                for (let i=0; i<data.length; i++){
                    datum.push([
                    res.data.businesses[i].name,
                    res.data.businesses[i].address,
                    res.data.businesses[i].city,
                    res.data.businesses[i].state,
                    res.data.businesses[i].zip,
                    res.data.businesses[i].latitude,
                    res.data.businesses[i].longitude,
                    res.data.businesses[i].url,
                    res.data.businesses[i].image,
                    res.data.businesses[i].categoryName,
                    res.data.businesses[i].categoryID,
                    res.data.businesses[i].type,
                    res.data.businesses[i].distance.miles,
                    ])
                }   
                let filteredDatum = datum.filter(x => x !== undefined)
                this.setState({
                    data: filteredDatum
                })
            })
            .catch(err => console.log(err))
        }
        fetching(category, keyword, postalCode);
    };

    render () {
        console.log('state in results page', this.props.location.state)
        return (
            <div className='resultsPage'>
                <Header/>
                <div className="header">
                    <h1>Browse The Top Businesses</h1>
                </div>
                <div>
                    <ResultsContainer propsPassed={this.state.data}/>
                </div>
                <Footer/>
            </div>
        );
    };
};
export default ResultsPage;