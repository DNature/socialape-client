import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

// MUI stuff
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Icons
import CalendarToday from '@material-ui/icons/CalendarToday';
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';

const styles = theme => ({
  ...theme.theme
});

const StaticProfile = props => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location }
  } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imageUrl} alt="Profile_Image" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
          >
            @ {handle}
          </MuiLink>
          <hr /> {bio && <Typography variant="body2"> {bio} </Typography>}
          <hr />
          {location && (
            <Fragment>
              <LocationOn color="primary" /> <span> {location} </span>
              <hr />
            </Fragment>
          )}
          {website && (
            <Fragment>
              <LinkIcon color="primary" />
              <a href={website} target="blank" rel="noopener noreferer">
                {website}
              </a>
              <hr />
            </Fragment>
          )}
          <CalendarToday color="primary" />
          <span> Joined {dayjs(createdAt).format('MMM YYYY')} </span>
        </div>
      </div>
    </Paper>
  );
};

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StaticProfile);
