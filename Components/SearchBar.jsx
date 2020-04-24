import  React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import ResultsPage from './Results/ResultsPage.jsx'

class SearchBar extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            topCatArray: [],
            category: '',
            keyword: '',
            postalCode: ''
        }
        this.getDropDown = this.getDropDown.bind(this)
        this.getUserInput = this.getUserInput.bind(this)
    }

    componentWillMount () {
       this.getDropDown()
    }

    getUserInput () {
        this.setState({
            category: document.getElementById('category').value,
            keyword: document.getElementById('keyword').value,
            postalCode: document.getElementById('zip').value
        })
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
        
    render () {
        let topCatInfo = this.state.topCatArray;
        let category = this.state.category;
        let keyword = this.state.keyword;
        let postalCode = this.state.postalCode;
        return (
            <div>
                <div className="search">   
                    <img className='searchImg' 
                        src={require('/Users/c.aribo/Desktop/kyodie-backend/assets/images/working_together.png')} 
                        style={{width:'80%', height: '96%'}}>
                    </img><br></br>

                    <div className='searchFields'>
                        <h3>Search For Any Local Business</h3>
                        <input className='input1' id='keyword' placeholder='Enter Keyword' onChange={this.getUserInput}></input>
                        <select id='category' onChange={this.getUserInput}>{topCatInfo.map((x,y) => <option  value={x} key={y}>{x}</option>)}</select>
                        <input className='input2' id='zip' placeholder='Enter Zip Code' onChange={this.getUserInput}></input>
                        
                    <Link to={{
                        pathname:'/searchSubmit',
                        state: {category: category, keyword: keyword, postalCode: postalCode}
                    }}> <button id="searchSubmit" >Search</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar

