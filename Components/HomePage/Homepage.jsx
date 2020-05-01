import React, { Component } from 'react';
import { Typography, withStyles, Paper } from '@material-ui/core';
import SearchBar from '../SearchBar.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const styles =(theme) => ({
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(3),
    backgroundColor: 'transparent',
    boxShadow: "none",
    color: 'gold'
  },
});

class Homepage extends Component {
    constructor (props) {
        super (props)
        this.state = {
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange () {
        let checkedIt = !this.state.checked
        this.setState({
            checked: checkedIt
        })    
    }

    render () {
        let { classes } = this.props
        let checked = this.state.checked
        return (
            <div className='homepage'>
                <div>
                    <Header/>
                    <div>
                        <div>
                            <Paper elevation={4} className={classes.paper}>
                                <div className='hompageText'>
                                    <b>SEARCH FOR <br></br> ANY  
                                     BUSINESS NEAR YOU </b>
                                </div>
                            </Paper>  
                        </div>
                    </div>
                    <div className='searchFormHome'>
                    <SearchBar/>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Homepage);