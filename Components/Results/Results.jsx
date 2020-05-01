import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
      width: 300,
      height: 180,
      backgroundColor: 'transparent',
      //boxShadow: "10px 10px 10px grey"
    },
  });

class Results extends Component {
    render () {
        let data = this.props.business;
        let { classes } = this.props
        return (
            <div>
                <Card className={classes.root} >
                    <CardContent>
                        <Typography> <b>Name:</b> {data[0]} </Typography>
                        <Typography> <b>City:</b> {data[2]} </Typography>
                        <Typography> <b>State:</b> {data[3]} </Typography>
                        <Typography> <b>Category:</b> {data[9]} </Typography>
                        <CardActions>
                            <Button
                             component={Link}
                             to={{
                                 pathname: '/resultsDetails', 
                                 state: {business:data}
                             }} >
                            Get More Details
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        );
    };
};
export default withStyles(styles)(Results);
