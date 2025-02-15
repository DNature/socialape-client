import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from '../../util/MyButton';

// REDUX Stuffs
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userActions';

// MUI stuffs
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// Icons
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    ...theme.theme
});

class EditDetails extends Component {
    state = {
        bio: '',
        website: '',
        location: '',
        open: false
    };

    mapUserDetailsToState = credentials => {
        this.setState({
            bio: credentials.bio ? credentials.bio : 'Am a Nice Person',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : ''
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = () => {
        const userDetails = {
            bio: this.state.bio,
            website: this.state.website,
            location: this.state.location
        };
        this.props.editUserDetails(userDetails);
        this.handleClose();
    };

    componentDidMount() {
        const { credentials } = this.props;
        this.mapUserDetailsToState(credentials);
    }

    handleOpen = () => {
        this.setState({ open: true });
        this.mapUserDetailsToState = this.props.credentials;
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return ( <
            Fragment >
            <
            MyButton tip = "Edit Details"
            place = "top"
            onClick = { this.handleOpen }
            btnClassName = { classes.button } >
            <
            EditIcon color = "primary" / >
            <
            /MyButton>{' '} <
            Dialog open = { this.state.open }
            onClose = { this.handleClose }
            fullWidth maxWidth = "sm" >
            <
            DialogTitle > Edit Your Details < /DialogTitle>{' '} <
            DialogContent >
            <
            form >
            <
            TextField name = "bio"
            type = "text"
            label = "Bio"
            multiline row = "3"
            placeholder = "A Short Bio about yourself"
            className = { classes.textField }
            value = { this.state.bio }
            onChange = { this.handleChange }
            fullWidth /
            >

            <
            TextField name = "website"
            type = "text"
            label = "Website"
            placeholder = "Your Personal/Professional website"
            className = { classes.textField }
            value = { this.state.website }
            onChange = { this.handleChange }
            fullWidth /
            >

            <
            TextField name = "location"
            type = "text"
            label = "Location"
            placeholder = "Where you live"
            className = { classes.textField }
            value = { this.state.location }
            onChange = { this.handleChange }
            fullWidth /
            >
            <
            /form>{' '} <
            /DialogContent>{' '} <
            DialogActions >
            <
            Button onClick = { this.handleClose }
            color = "primary" >
            Cancel { ' ' } <
            /Button>{' '} <
            Button onClick = { this.handleSubmit }
            color = "primary" >
            Save { ' ' } <
            /Button>{' '} <
            /DialogActions>{' '} <
            /Dialog>{' '} <
            /Fragment>
        );
    }
}

EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    credentials: state.user.credentials
});
export default connect(
    mapStateToProps, { editUserDetails }
)(withStyles(styles)(EditDetails));