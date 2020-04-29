import React, { Component } from 'react';
import { Typography, withStyles, Paper, Slide } from '@material-ui/core';
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
            <div className='homepage' onWheel={this.handleChange}>
                <div>
                    <Header/>
                    <div>
                        <div>
                            <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                            <Paper elevation={4} className={classes.paper}>
                                <Typography variant="h1">
                                    Text 1
                                </Typography>
                            </Paper>  
                            </Slide>

                            <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
                            <Paper elevation={4} className={classes.paper}>
                                <Typography variant="h1">
                                    Text 2
                                </Typography>
                            </Paper>
                            </Slide>
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