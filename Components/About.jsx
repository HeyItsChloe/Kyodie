import React, { Component } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Typography, withStyles } from '@material-ui/core';
import MaximizeIcon from '@material-ui/icons/Maximize';

const styles = (theme) => ({
    root: {
        textAlign: 'left',
        margin: theme.spacing(7),
        color: 'rgb(247, 247, 57)',
    },
    line: {
        //position: 'fixed',
        bottom: 60
    },
    text: {
        fontSize: 60
    }
  });

class About extends Component {
    render () {
        let { classes } = this.props
        return  (
            <div className='aboutPage'>
                <Header/>
                <div className={classes.root}>
                    <Typography className={classes.text}>
                        KYODIE is a local business  <br></br>
                        search directory. Find any business, <br></br>
                        anywhere, in any industry. Start <br></br>
                        searching now and contact your favorites. <br></br> <br></br>
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
                        <MaximizeIcon fontSize={'large'}/> <MaximizeIcon fontSize={'large'}/> 
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default withStyles(styles)(About);
