import  React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField, MenuItem, Button, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styleSheet = (theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '19.2ch',
        backgroundColor: 'transparent',
      },
    },
    IconButton: {
        color: 'grey',
        padding: theme.spacing(1.7),
        margin: theme.spacing(1.2),
        backgroundColor: 'gold'
    }
  });

class SearchBar extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            topCatArray: [],
            category: '',
            keyword: '',
            postalCode: ''
        };
        this.getDropDown = this.getDropDown.bind(this);
        this.getUserInput = this.getUserInput.bind(this);
    };

    componentWillMount () {
       this.getDropDown();
    };

    getUserInput (event) {
        this.setState({
            category: event.target.value, //document.getElementById('category').value,
            keyword: event.target.value,//document.getElementById('keyword').value,
            postalCode: event.target.value //document.getElementById('zip').value
        });
    };

    getDropDown () { 
        axios.get ('/categories')
        .then(res => {
            let topCatData = res.data.topCategories
            this.setState({
                topCatArray: topCatData
            })
        })
        .catch(err => console.log(err))
    };
        
    render () {
        let topCatInfo = this.state.topCatArray;
        let category = this.state.category;
        let keyword = this.state.keyword;
        let postalCode = this.state.postalCode;
        let { classes } = this.props

        return (
            <div  >
                <form className={classes.root}>
                    <TextField           
                        required
                        id="outlined-basic"
                        label="Type Of Business"
                        variant="outlined"
                        onChange={this.getUserInput} />                   
                    <TextField           
                        required
                        id="outlined-basic"
                        label="Zip Code"
                        variant="outlined"
                        onChange={this.getUserInput} />
                    <TextField
                        required
                        id="outlined-select"
                        select
                        label="Select A Category" 
                        variant="outlined"
                        //value={topCatInfo}
                        onChange={this.getUserInput} >
                            {topCatInfo.map((option, index) => <MenuItem key={index} value={option} > {option} </MenuItem>)}
                    </TextField>
                    <Button 
                        className={classes.IconButton}
                        size='medium'
                        p={5}
                        variant="outlined" 
                        color="inherit" 
                        component={Link}
                        to='/searchSubmit'>
                            <SearchIcon/>
                    </Button>
                </form>


{/* 
                <div className="search">   


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
                </div> */}
            </div>
        )
    }
}
export default withStyles(styleSheet)(SearchBar);
