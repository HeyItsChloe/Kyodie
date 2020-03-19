import  React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import ResultsPage from './Results/ResultsPage.jsx'
import CategoriesContainer from './Categories/CategoriesContainer.jsx';
import * as action from '../Redux/Actions/actions.jsx';


class SearchBar extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            // categoryName: [],
            // name: [],
            topCatArray: [],
            //subCatArray: [],
            //locationArray: [],
            //selectedAuthor: '',
            isSearched: false,
            data:[]
        }
        this.handleClick = this.handleClick.bind(this)
        this.getResults = this.getResults.bind(this)
        this.getDropDown = this.getDropDown.bind(this)
    }

    componentDidMount () {
        //this.getDropDown()
    }

    handleClick (event) {
        this.getResults()
        //this.setState({isSearched: true})
        //event.preventDefault()
    }

    getDropDown () {
        console.log('getting to dropdown')
        const url = `https://trialapi.soleo.com/businesses?Keyword=insurance&PostalCode=14450&APIKey=e56x4kzx7bh54p8z6tj53t48`
 
            axios.get (url)
            .then(res => {
                console.log('res in search bar', res.data)

                let data = res.data.businesses
                let topCat = []
                let subCat = []
                //let location = []
                for (let i=0; i<data.length; i++){
                    topCat.push(data[i].author)
                    subCat.push(data[i].quote)
                    //location.push(data[i].location)
                }
                /* need to update state with business list from get request so i can call it in the render */
                this.setState({
                    topCatArray: topCat,
                    subCatArray: subCat,
                    //locationArray: location 
                })
            })
            .catch(err => console.log(err))
    }

    getResults () {
        let category = 'insurance'
        let keyword = document.getElementById('keyword').value
        let postalCode = document.getElementById('zip').value

        const fetching =(category, keyword, postalCode) => { //why must this be an arrow function??? ('this' context)
            axios.get (`https://trialapi.soleo.com/businesses?Category=${category}&Keyword=${keyword}&PostalCode=${postalCode}&APIKey=e56x4kzx7bh54p8z6tj53t48`) //why cant i use fetch / cors???
            .then(res => {
                console.log('res in get results search bar', res.data.businesses)
                //res.json() //dont need this?
                let data = res.data.businesses
                let datum = []
                /**
                 * here data is an array of objects
                 * need to push the values of the keys that I want into an array (objects can not render to the dom, arrays can)
                 [
                    0: {
                        name: "State Farm Auto Insurance"
                        address: ""
                        city: ""
                        state: ""
                        zip: ""
                        latitude: ""
                        longitude: ""
                        url: ""
                        score: ""
                        verified: "No"
                        image: ""
                        categoryName: "Insurance"
                        categoryID: "7.13"
                        distance: {miles: ""}
                        type: "Sponsored"
                     },
                 ]
                */
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
                /* need to filter out all values that are "undefined" */
                let filteredDatum = datum.filter(x => x !== undefined)

                /* need to update state with business list from get request so i can call it in the render */
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
        let topCatData = this.state.topCatArray;
        // let subCatData = this.state.subCatArray;
        // let locationData = this.state.locationArray; 

        return (
            <div>
            <div className="search">
                <div className='searchFields'>
                    <img className='searchImg' src={require('../assets/images/working_together_2.png')} style={{width:'100px'}}></img><br></br>
                    <label>Search For What You Need</label><br></br>
                    <input className='input1' id='keyword' placeholder='Enter Keyword'></input>
                    <select>{topCatData.map((x,y) => <option key={y}>{x}</option>)}</select>
                    {/* <select>{subCatData.map((x,y) => <option key={y}>{x}</option>)}</select>
                    <select>{locationData.map((x,y) => <option key={y}>{x}</option>)}</select> */}
                    <input className='input2' id='zip' placeholder='Enter Zip Code'></input>
                    
                    <button  id="searchSubmit" onClick={this.handleClick}>Search</button>
                </div>
            </div>

            <div>
                {isSearched ? (
                    <ResultsPage props={this.state}/>
                 ): <CategoriesContainer/> }
            </div>
            </div>
        )
    }
}

export default SearchBar
