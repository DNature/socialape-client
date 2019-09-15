import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';

// MUI stuffs
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

// MUI ICons
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

// REDUX Stuffs
import { connect } from 'react-redux';
import { postScream, clearErrors } from '../../redux/actions/dataActions';

const styles = theme => ({
  ...theme.theme,

  textField: {
    position: 'relative',
    width: '100%',
    marginBottom: '1rem'
  }
});

class PostScream extends Component {
  state = {
    open: false,
    body: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: '', open: false, errors: {} });
    }
  }
  // HAndles Dialog Open
  handleOpen = () => {
    this.setState({ open: true });
  };

  // Handle Dialog close
  handleClose = () => {
    this.setState({ open: false, errors: {} });
    this.props.clearErrors();
  };

  // Handle Change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // HandleSubmit
  handleSubmit = e => {
    e.preventDefault();
    this.props.postScream({ body: this.state.body });
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;

    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Post a scream!">
          <AddIcon />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle> Post A New Scream </DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="body"
                type="text"
                placeholder="Post a scream at your fellow apes !!!!"
                label="SCREAM"
                rows="3"
                multiline
                fullwidth
                error={errors.body ? true : false}
                helperText={errors.body}
                className={classes.textField}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progresSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { postScream, clearErrors }
)(withStyles(styles)(PostScream));
