import React, { Component } from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { withStyles, Typography, CardContent, Card } from '@material-ui/core';

const styles = (theme) => ({
    root: {
      width: 600,
      height: 500,
      backgroundColor: 'transparent',
      boxShadow: "10px 10px 10px 10px grey"
    },
  });

class ResultsDetails extends Component {
    render () {
        let data = this.props.location.state.business
        let { classes } = this.props
        return (
            <div className='resultsDetails'>
                <Header/>
                <div className='resultsDetailsCard'>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant='h6'>MORE DETAILS ABOUT: "{`${data[0]}`}"</Typography>
                            <div  className='resultBoxes'>
                            <p> <b>Address:</b> {data[1]} </p>
                            <p> <b>Zip:</b> {data[4]} </p>
                            <p> <b>URL:</b> {data[7]} </p>
                            <p> <b>Image:</b> {data[8]} </p>
                            <p> <b>Latitude:</b> {data[5]} </p>
                            <p> <b>Longitude:</b> {data[6]} </p>
                            <p> <b>CategoryID:</b> {data[10]} </p>
                            <p> <b>Type:</b> {data[11]} </p>
                            <p> <b>Miles:</b> {data[12]} </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Footer/>
            </div>
        );
    };
};
export default withStyles(styles)(ResultsDetails);
