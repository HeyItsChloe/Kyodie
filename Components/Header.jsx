import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Profile from './Auth/Profile.jsx'
import { withStyles } from '@material-ui/core/styles';
import { MenuItem } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: "none",
        color: 'navy'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    closeButton: {
        flexGrow: 1,
        color: 'red'
    },
    menuItems: {
        textAlign: 'center'
    },
    title: {
      flexGrow: 1,
    },
    Popover: {
        width: '100%',
        height: '100%',
        backgroundColor: 'navy',
        color: 'gold',
        textAlign: 'right'
        // maxHeight: 'none',
        // maxWidth: 'none',  
    }
  });

  class Header extends Component {
    constructor (props) {
        super (props)
        this.state = {
            anchorEl: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleClick (event) {
        this.setState({
            anchorEl: event.currentTarget
        });
    };
    
    handleClose () {
        this.setState({
            anchorEl: null
        });
    };

      render () {
        let { classes } = this.props
        let anchorEl = this.state.anchorEl
        return(
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar} >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} >
                            KYODIE
                        </Typography>
                        <IconButton 
                            edge="start" 
                            className={classes.menuButton} 
                            color="inherit" 
                            aria-label="menu"
                            aria-controls="fade-menu" 
                            aria-haspopup="true"
                            onClick={this.handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="fade-menu"
                            PopoverClasses={{paper: classes.Popover}}
                            anchorEl={this.state.anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            //onClose={this.handleClose}
                            >
                            <IconButton onClick={this.handleClose}>
                                <CloseIcon/>
                            </IconButton>
                            <MenuItem 
                                className={classes.menuItems}
                                component={Link}
                                to='/Login'
                                > Login 
                            </MenuItem>
                            <MenuItem 
                                className={classes.menuItems}
                                component={Link}
                                to='/About'> About 
                            </MenuItem>
                            <MenuItem
                                className={classes.menuItems}
                                component={Link}
                                to='/Contact'> Contact 
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default withStyles(styles)(Header);