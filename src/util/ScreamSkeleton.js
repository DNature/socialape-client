import React, { Fragment } from 'react';
import NoImg from '../images/no-img.png';
import PropTypes from 'prop-types';
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';
import { flexbox } from '@material-ui/system';

const styles = theme => ({
  ...theme.theme,
  card: {
    display: 'flex',
    marginBottom: 20,
    animation: '0.2s blinker linear infinite'
  },
  cardContent: {
    width: '100%',
    flexDirection: 'column',
    padding: 25,
    animation: '0.2s blinker linear infinite'
  },
  cover: {
    minWidth: 150,
    height: 150,
    objectFit: 'cover',
    animation: '0.2s blinker linear infinite'
  },
  handle: {
    width: 80,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    width: 100,
    height: 12,
    backgroundColor: theme.palette.primary.light,
    marginBottom: 7
  },
  fullLine: {
    width: '60%',
    height: 15,
    backgroundColor: theme.palette.primary.dark,
    marginBottom: 7
  },
  halfLine: {
    width: '40%',
    height: 15,
    backgroundColor: theme.palette.primary.dark
  }
});

const ScreamSkeleton = props => {
  const { classes } = props;

  const content = Array.from({ length: 5 }).map((item, index) => (
    <Card className={classes.card} key={index}>
      <CardMedia className={classes.cover} image={NoImg} />
      <CardContent className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.date} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
        <div className={classes.halfLine} />
      </CardContent>
    </Card>
  ));

  return <Fragment>{content}</Fragment>;
};

ScreamSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScreamSkeleton);
