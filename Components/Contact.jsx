import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Button, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        textAlign: 'center',
        margin: theme.spacing(20)
    },
    Button: {
        color: 'hotpink',
        padding: theme.spacing(1.7),
        backgroundColor: 'blue'
    }
  });

class Contact extends Component {
    render () {
        let { classes } = this.props
        return  (
            <div className='contactPage'>
                <Header/>
                <div className={classes.root}>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum. <br></br> <br></br>
                    </div>
                    <Button variant="contained" color="primary" className={classes.Button}>
                        Say Hello! To The Developer :)
                    </Button>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withStyles(styles)(Contact);
