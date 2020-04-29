import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { Typography } from '@material-ui/core';
import { TextField, Button, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '19.2ch',
          },
        margin: theme.spacing(10),
        color: 'hotpink',
        textAlign: 'center',
    }
  });

class SignUp extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            signingUp: false,
            userNameSignup: '',
            passwordSignup: ''
        };
        this.getUserInput = this.getUserInput.bind(this);
    };

    getUserInput () {
        this.setState({
            userNameSignup: document.getElementById('userName').value,
            passwordSignup: document.getElementById('password').value,
            signingUp: true
        });
    };

    render () {
        let signingUp = this.state.signingUp;
        let userNameSignup = this.state.userNameSignup;
        let passwordSignup = this.state.passwordSignup;
        let { classes } = this.props
        return (
            <div className='signupPage'>
                {/* change header color */}
                <div className='signupHeader'>
                    <Header/>
                </div>

                <form className={classes.root}>
                    <div>
                        <Typography> CREATE AN ACCOUNT </Typography>
                        
                        {/* give each icon image? and make color pink*/}
                        <TextField
                        required
                        id="outlined-basic"
                        label="Enter User Name"
                        variant="outlined"
                        onChange={this.getUserInput} />     
                        <TextField
                        required
                        id="outlined-basic"
                        label="Enter Password"
                        variant="outlined"
                        onChange={this.getUserInput} /> <br></br>

                        {/* pass state here */}
                        <Button 
                        size='medium'
                        p={5}
                        variant="outlined" 
                        color="inherit" 
                        component={Link}
                        to='/profile'>
                            SignUp
                        </Button>   
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}
export default withStyles(styles)(SignUp);
