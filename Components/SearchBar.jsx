import  React, { Component } from 'react';
import axios from 'axios'
import ResultsPage from './Results/ResultsPage.jsx'

class SearchBar extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            topCatArray: [],
            isSearched: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.getResults = this.getResults.bind(this)
        this.getDropDown = this.getDropDown.bind(this)
    }

    componentWillMount () {
       this.getDropDown()
    }

    handleClick (event) {
        this.getResults()
        event.preventDefault()
    }

    getDropDown () { 
        axios.get ('/categories')
        .then(res => {
            let topCatData = res.data.topCategories
            this.setState({
                topCatArray: topCatData
            })
        })
        .catch(err => console.log(err))
    }

    getResults () {
        let category = document.getElementById('category').value
        let keyword = document.getElementById('keyword').value
        let postalCode = document.getElementById('zip').value
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
            .then(() => this.setState({isSearched: true}))
            .catch(err => console.log(err))
        }
        fetching(category, keyword, postalCode )
    }
        
    render () {
        const isSearched = this.state.isSearched;
        let topCatInfo = this.state.topCatArray;
        
        return (
            <div>
            <div className="search">   
                <img className='searchImg' 
                    src={require('/Users/c.aribo/Desktop/kyodie-backend/assets/images/working_together.png')} 
                    style={{width:'80%', height: '96%'}}>
                </img><br></br>

                <div className='searchFields'>
                    <h3>Search For Any Local Business</h3>
                    <input className='input1' id='keyword' placeholder='Enter Keyword'></input>
                    <select id='category'>{topCatInfo.map((x,y) => <option  value={x} key={y}>{x}</option>)}</select>
                    <input className='input2' id='zip' placeholder='Enter Zip Code'></input>
                    
                    <button  id="searchSubmit" onClick={this.handleClick}>Search</button>
                </div>
            </div>

            <div>
                {isSearched ? (
                    <ResultsPage props={this.state}/>
                 ): null }
            </div>
            </div>
        )
    }
}

export default SearchBar

