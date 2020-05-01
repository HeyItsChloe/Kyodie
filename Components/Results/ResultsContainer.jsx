import React, { Component } from 'react';
import Results from './Results.jsx';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    boxShadow: "7px 7px 7px 7px black",
    overflow: 'auto',
    height: 400
  },
});

class ResultsContainer extends Component {
    render () {
        let { classes } = this.props
        let results = this.props.propsPassed;
        let resultArr = []
        for(let j=0; j<results.length; j++){
            resultArr.push(
                <Grid item xs={4}>
                    <Results key={j} business={results[j]} />
                </Grid>
            )
        };
        return (
            <div>
                <Grid className={classes.root} container spacing={2} alignItems="center" justify="center">
                    {resultArr}
                </Grid>
            </div>
        );
    };
};
export default withStyles(styles)(ResultsContainer);
