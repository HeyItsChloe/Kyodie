import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';


import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
// export default function Profile() {
//   return (
    // <Paper >
    //   <Tabs
    //     value={0}
    //     indicatorColor="primary"
    //     textColor="primary"
    //     centered
    //   >
    //     <Tab label="Item One" />
    //     <Tab label="Item Two" />
    //     <Tab label="Item Three" />
    //   </Tabs>
    // </Paper>
//   );
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
});


class Profile extends Component {
  constructor (props) {
      super (props) 
      this.state = {
        value: 0
      }
      // this.handleLogin = this.handleLogin.bind(this);
      // this.createUser = this.createUser.bind(this);
      this.handleChange = this.handleChange.bind(this)
  }; 

  handleChange () {
    this.setState({
      value: event.target.value
    })
  }

  // componentDidMount () {
  //     if (this.props.location.state.loggingIn === true){
  //         this.handleLogin();
  //     };
  //     if (this.props.location.state.signingUp === true) {
  //         this.createUser();
  //     };
  // };

  // handleLogin () {
  //     const userNameLogin = this.props.location.state.userNameLogin;
  //     const passwordLogin = this.props.location.state.passwordLogin;
  //     fetch('/api/user/login', {
  //         method: 'POST',
  //         headers: {'Content-Type' : 'application/json'},
  //         body: JSON.stringify({userName: userNameLogin, password: passwordLogin})
  //     })
  //     .catch(() => { 
  //         if (err) {console.log('err in signup createUser post')}
  //     })
  // };

  // createUser () {
  //     const userNameSignup = this.props.location.state.userNameSignup;
  //     const passwordSignup = this.props.location.state.passwordSignup;
  //     fetch('/api/user/signup', {
  //         method: 'POST',
  //         headers: {'Content-Type' : 'application/json'},
  //         body: JSON.stringify({userName: userNameSignup, password: passwordSignup})
  //     })
  //     .catch((err) => {
  //         if (err) {console.log('err in signup createUser post')}
  //     })
  // };

  render () {
    // let userName = this.props.location.state.userName;
    // let password = this.props.location.state.password;
    let { classes } = this.props
    let value = this.setState.value
    return (
      <div className='profilePage'>
        <div className="profileHeader">
          <Header/>
        </div>
        <Typography>Your Profile</Typography>

        <div className={classes.root}>
          {/* <Paper > */}
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={this.handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          {/* </Paper> */}
            {/* 
              <Link to={{
                  pathname:'/api/forum/:id', 
                  state: {userName: userName, password: password}
                  }}> <button>Go To Forum</button> </Link>
              <button>See All Favs</button> */}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default withStyles(styles)(Profile);
