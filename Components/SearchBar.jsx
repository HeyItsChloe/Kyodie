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
        this.getKeyword = this.getKeyword.bind(this);
        this.getZip = this.getZip.bind(this)
        this.getCategory = this.getCategory.bind(this)
    };

    componentWillMount () {
       this.getDropDown();
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

    getKeyword (event) {
        this.setState({
            keyword: event.target.value
        });
    };

    getZip (event) {
        this.setState({
            postalCode: event.target.value
        });
    };

    getCategory (event) {
        this.setState({
            category: event.target.value
        });
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
                        className='keyword'
                        id="outlined-basic"
                        label="Type Of Business"
                        variant="outlined"
                        value={keyword}
                        onChange={this.getKeyword} />                   
                    <TextField           
                        required
                        id="outlined-basic"
                        label="Zip Code"
                        variant="outlined"
                        value={postalCode}
                        onChange={this.getZip} />
                    <TextField
                        required
                        id="outlined-select"
                        select
                        label="Select A Category" 
                        variant="outlined"
                        onChange={this.getCategory} >
                            {topCatInfo.map((option, index) => <MenuItem key={index} value={option} > {option} </MenuItem>)}
                    </TextField>
                    <Button 
                        className={classes.IconButton}
                        size='medium'
                        p={5}
                        variant="outlined" 
                        color="inherit" 
                        component={Link}
                        to={{
                            pathname: '/searchSubmit', 
                            state: {category: category, keyword: keyword, postalCode: postalCode}
                        }}>
                        <SearchIcon/>
                    </Button>
                </form>
            </div>
        )
    }
}
export default withStyles(styleSheet)(SearchBar);
