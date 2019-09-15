import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/ape.png';
import { Link } from 'react-router-dom';

//MUI stuff
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const styles = theme => ({
  ...theme.theme
});
export class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      handle: '',
      errors: {}
    };
  }

  //set errors
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }

  // Handle form submit
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
    this.props.signupUser(newUserData, this.props.history);
  };
  // Handle Changes on Input
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;
    const { errors } = this.state;

    return (
      <div className={classes.form}>
        <img src={AppIcon} alt="Ape, Monkey" className={classes.image} />
        <Typography variant="h2" className={classes.pageTitle}>
          Signup
        </Typography>
        <form noValidate onSubmit={this.handleSubmit}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            className={classes.textField}
            helperText={errors.email}
            error={errors.email ? true : false}
            value={this.state.email}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            className={classes.textField}
            helperText={errors.password}
            error={errors.password ? true : false}
            value={this.state.password}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            className={classes.textField}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            fullWidth
          />

          <TextField
            id="handle"
            name="handle"
            type="text"
            label="Handle"
            className={classes.textField}
            helperText={errors.handle}
            error={errors.handle ? true : false}
            value={this.state.handle}
            onChange={this.handleChange}
            fullWidth
          />
          {errors.general && (
            <Typography variant="body2" className={classes.customError}>
              {errors.general}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            value="SUBMIT"
            disabled={loading}
          >
            SIGNUP
            {loading && (
              <CircularProgress
                className={classes.progress}
                color="secondary"
                size={25}
              />
            )}
          </Button>
          <br />
          <div className="small">
            <small>
              Already have an account ? Login <Link to="/login">here</Link>
            </small>
          </div>
        </form>
      </div>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { signupUser }
)(withStyles(styles)(signup));
