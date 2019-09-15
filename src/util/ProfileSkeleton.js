import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NoImg from '../images/no-img.png';

import Paper from '@material-ui/core/Paper';

//MUI Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = theme => ({
  ...theme.theme,
  handle: {
    height: 20,
    backgroundColor: theme.palette.primary.main,
    width: 120,
    margin: '7px auto 7px auto'
  },
  fullLine: {
    width: '90%',
    height: 15,
    backgroundColor: theme.palette.primary.dark,
    margin: '7px auto 7px auto'
  },
  halfLine: {
    width: '40%',
    height: 15,
    backgroundColor: theme.palette.primary.dark,
    margin: '7px auto 7px auto'
  }
});
const ProfileSkeleton = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={NoImg} alt="Profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <div className={classes.handle} />
          <hr />
          <div className={classes.fullLine} />
          <div className={classes.fullLine} />
          <div className={classes.halfLine} />
          <hr />
          <LocationOn color="primary" /> <span>Location</span>
          <hr />
          <LinkIcon color="primary" /> <span>https://www.website.com</span>
          <hr />
          <CalendarToday color="primary" /> <span>Joined Date</span>
        </div>
      </div>
    </Paper>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSkeleton);
