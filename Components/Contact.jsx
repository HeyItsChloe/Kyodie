import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Button, withStyles, Typography } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        textAlign: 'center',
        margin: theme.spacing(20)
    },
    Button: {
        color: 'hotpink',
        padding: theme.spacing(1.7),
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 40,
        color: 'blue'
    }
  });

class Contact extends Component {
    render () {
        let { classes } = this.props
        return  (
            <div className='contactPage'>
                <Header/>
                <div className={classes.root}>
                    <Typography className={classes.text}>
                    Comments? Questions? Contact the developer of this tutorial. View its 
                    repo on GitHub or its Medium articles to see more details.
                    <br></br> <br></br>
                    </Typography>
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
