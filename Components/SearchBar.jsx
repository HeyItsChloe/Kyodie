import  React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import ResultsPage from './Results/ResultsPage.jsx'
import CategoriesContainer from './Categories/CategoriesContainer.jsx';
import * as action from '../Redux/Actions/actions.jsx';


/* invoked each time the store updates. passed the current state of the Redux store */
// const mapStateToProps = (state) => ({
// 	state: state
// });

const mapDispatchToProps = {
	businesList : this.state.data
}

class SearchBar extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            topCatArray: [],
            isSearched: false,
            data: []
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
        const fetching =(category, keyword, postalCode) => { //why must this be an arrow function??? ('this' context)
            let url = `https://trialapi.soleo.com/businesses?Category=${category}&Keyword=${keyword}&PostalCode=${postalCode}&APIKey=e56x4kzx7bh54p8z6tj53t48`
            axios.get (url) //why cant i use fetch / cors???
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
            //.then(() => console.log('the data', this.state.data))
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
                    style={{width:'75%', height: '90%'}}>
                </img><br></br>

                <div className='searchFields'>
                    <h3>Search For What You Need</h3>
                    <input className='input1' id='keyword' placeholder='Enter Keyword'></input>
                    <select id='category'>{topCatInfo.map((x,y) => <option  value={x} key={y}>{x}</option>)}</select>
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

//export default SearchBar
/**
 * The connect() method takes two arguments: mapStateToProps and mapDispatchToProps 
 * and returns a function that can be used to connect the Redux store with a component.
 * (searchBar) invokes the connect
 */
export default connect(
	null,
	mapDispatchToProps
)(SearchBar);

