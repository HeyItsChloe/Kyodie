import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Typography, withStyles } from '@material-ui/core';
import MaximizeIcon from '@material-ui/icons/Maximize';

const styles = (theme) => ({
    root: {
        textAlign: 'left',
        margin: theme.spacing(7),
        color: 'white',
    },
    line: {
        position: 'fixed',
        bottom: 60
    }
  });

class About extends Component {
    render () {
        let { classes } = this.props
        return  (
            <div className='aboutPage'>
                <Header/>
                <div className={classes.root}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.       
                    </Typography>
                    <div className={classes.line}>
                        {/* add dashed line here */}
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/>  <MaximizeIcon fontSize={'large'}/>  
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withStyles(styles)(About);
