import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { Typography } from '@material-ui/core';
import { TextField, MenuItem, Button, withStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const styles = (theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '19.2ch',
          },
        margin: theme.spacing(10),
        color: 'pink',
        textAlign: 'center',
    },
    signup: {
        margin: theme.spacing(1),
        backgroundColor: 'pink',
        color: 'navy',
    }
  });

class Login extends Component {
    constructor (props) {
        super (props) 
        this.state = {
            userNameLogin: '',
            passwordLogin: '',
            loggingIn: false
        };
       this.getUserPass = this.getUserPass.bind(this);
       this.getUserName = this.getUserName.bind(this);
    }; 
    
    getUserName (event) {
        //add these keys to the textfields? as classnames? or give each field its own onClick?
        this.setState({
            userNameLogin: event.target.value, //document.getElementById('userName').value,
        });
    };
    getUserPass (event) {
        //add these keys to the textfields? as classnames? or give each field its own onClick?
        this.setState({
            passwordLogin: event.target.value, //document.getElementById('password').value,
            loggingIn: true
        });
    };

    render () {
        let loggingIn = this.state.loggingIn;
        let userNameLogin = this.state.userNameLogin;
        let passwordLogin = this.state.passwordLogin;
        let { classes } = this.props
        console.log('in login', userNameLogin, passwordLogin)
        return (
            <div className='loginPage'>
                {/* change header color */}
                <div className='loginHeader'>
                    <Header/>
                </div>

                <form className={classes.root}>
                    <div>
                        <Typography> LOGIN TO YOUR ACCOUNT </Typography>
                        
                        {/* give each icon image? and make color pink*/}
                        <TextField
                        required
                        id="outlined-basic"
                        label="Enter User Name"
                        variant="outlined"
                        value={userNameLogin}
                        onChange={this.getUserName} />     
                        <TextField
                        required
                        id="outlined-basic"
                        label="Enter Password"
                        variant="outlined"
                        value={passwordLogin}
                        onChange={this.getUserPass} /> <br></br>

                        {/* pass state here */}
                        <Button 
                        size='medium'
                        p={5}
                        variant="outlined" 
                        color="inherit" 
                        component={Link}
                        to={{
                            pathname:'/profile', 
                            state:{userNameLogin: userNameLogin, passwordLogin:passwordLogin, loggingIn:loggingIn}
                        }}>
                        Login
                        </Button>   
                    </div>

                    {/* make this font bigger and pass state here */}
                    <div className='signupArea'>
                        <Typography>
                            No Account? Sign Up Here!
                        </Typography>

                        <Button 
                        className={classes.signup}
                        size='medium'
                        p={5}
                        variant="contained" 
                        color="inherit" 
                        component={Link}
                        to='/signup'>
                            Signup
                        </Button> 
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}
export default withStyles(styles)(Login);
