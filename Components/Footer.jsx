import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = () => ({
    bottomNav: {
      backgroundColor: 'transparent',
    }
  });

class Footer extends Component {
    render () {
        let { classes } = this.props
        return (
            <div className='pageFooter'>
                <BottomNavigation
                    className={classes.bottomNav}>
                        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
                        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}
export default withStyles(styles)(Footer);