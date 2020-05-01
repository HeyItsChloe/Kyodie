import React, { Component } from 'react';
import { Typography, withStyles, Paper } from '@material-ui/core';
import SearchBar from '../SearchBar.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const styles =(theme) => ({
    hompageText: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(3),
    backgroundColor: 'transparent',
    boxShadow: "none",
    color: 'gold'
  },
});

class Homepage extends Component {
    render () {
        let { classes } = this.props
        return (
            <div className='homepage'>
                <div>
                    <Header/>
                    <div>
                        <div >
                            <div className='hompageText'>
                                <b> SEARCH FOR <br></br> 
                                ANY BUSINESS NEAR YOU </b>
                            </div>
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