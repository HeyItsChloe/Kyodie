import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, withStyles, Typography, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import authStyles from '../Auth/authStyles.scss';

/* Helper Functions For the Vertical MUI Tabs */
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
      this.handleLogin = this.handleLogin.bind(this);
      this.createUser = this.createUser.bind(this);
      this.handleChange = this.handleChange.bind(this)
  }; 

  handleChange ( event, index) {
    this.setState({
      value: index
    })
  }

  componentDidMount () {
      if (this.props.location.state.loggingIn === true){
          this.handleLogin();
      };
      if (this.props.location.state.signingUp === true) {
          this.createUser();
      };
  };

  handleLogin () {
      const userNameLogin = this.props.location.state.userNameLogin;
      const passwordLogin = this.props.location.state.passwordLogin;
      fetch('/api/user/login', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({userName: userNameLogin, password: passwordLogin})
      })
      .catch(() => { 
          if (err) {console.log('err in signup createUser post')}
      })
  };

  createUser () {
      const userNameSignup = this.props.location.state.userNameSignup;
      const passwordSignup = this.props.location.state.passwordSignup;
      fetch('/api/user/signup', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({userName: userNameSignup, password: passwordSignup})
      })
      .catch((err) => {
          if (err) {console.log('err in signup createUser post')}
      })
  };

  render () {
    let userName = this.props.location.state.userNameLogin || this.props.location.state.userNameSignup;  
    let password = this.props.location.state.passwordLogin || this.props.location.state.passwordSignup; 
    let { classes } = this.props
    let value = this.state.value

    return (
      <div className='profilePage'>
        <div className="profileHeader">
          <Header/>
        </div>
        <Typography>Your Profile</Typography>

        <div className={classes.root}>
          <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={this.handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Kyodie Community" {...a11yProps(0)} />
              <Tab label="Recent Searches" {...a11yProps(1)} />
              <Tab label="Favorite Businesses" {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
            <Typography>Post comments and questions in the community forum</Typography> <br></br>
              <Button
                className={classes.IconButton}
                size='medium'
                p={5}
                variant="outlined" 
                color="inherit" 
                component={Link}
                to={{
                  pathname: '/api/forum/:id', 
                  state:{userName: userName, password: password}
                }}>
                Forum
              </Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography>View Your Most Recent Searches</Typography> <br></br>
            <Button
              className={classes.IconButton}
              size='medium'
              p={5}
              variant="outlined" 
              color="inherit" >
              Most Searches
            </Button>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Typography>View the Businesses you liked the most</Typography> <br></br>
            <Button
              className={classes.IconButton}
              size='medium'
              p={5}
              variant="outlined" 
              color="inherit" >
              Favs 
            </Button>
            </TabPanel>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default withStyles(styles)(Profile);
