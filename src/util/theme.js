export default {
    palette: {
        primary: {
            light: '#92f2ff',
            main: '#00bcd4',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff'
        }
    },
    theme: {
        //Do the stylings in here
        form: {
            textAlign: 'center',
            maxWidth: 400,
            margin: 'auto'
        },

        invisibleSeparator: {
            border: 'none',
            opacity: '0',
            margin: 4
        },
        visibleSeperator: {
            borderBottom: '1px solid #ddd',
            marginBottom: '20px'
        },
        image: {
            width: 80,
            marginTop: 30
        },
        button: {
            margin: 20,
            position: 'relative'
        },
        pageTitle: {
            margin: 10
        },
        textField: {
            margin: '10px 0'
        },
        customError: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: 20
        },
        progress: {
            position: 'absolute'
        },
        progresSpinner: {
            position: 'absolute'
        },
        spinnerDiv: {
            textAlign: 'center',
            marginTop: 50,
            marginBottom: 50
        },

        submitButton: {
            position: 'relative',
            float: 'right',
            marginBottom: '1rem'
        },
        closeButton: {
            position: 'absolute',
            right: '5%',
            top: '5%'
        },
        paper: {
            padding: 20
        },
        profile: {
            '& .image-wrapper': {
                textAlign: 'center',
                position: 'relative'
            },
            '& .profile-image': {
                width: 200,
                height: 200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
            },
            '& .profile-details': {
                textAlign: 'center',
                '& span, svg': {
                    verticalAlign: 'middle'
                },
                '& a': {
                    color: '#00bcd4'
                }
            },
            '& hr': {
                border: 'none',
                margin: '0 0 10px 0'
            }
        },
        paper: {
            padding: 20
        },
        profile: {
            '& .image-wrapper': {
                textAlign: 'center',
                position: 'relative',
                '& button': {
                    position: 'absolute',
                    top: '80%',
                    left: '70%'
                }
            },
            '& .profile-image': {
                width: 200,
                height: 200,
                objectFit: 'cover',
                maxWidth: '100%',
                borderRadius: '50%'
            },
            '& .profile-details': {
                textAlign: 'center',
                '& span, svg': {
                    verticalAlign: 'middle'
                },
                '& a': {
                    color: '#00bcd4'
                }
            },
            '& hr': {
                border: 'none',
                margin: '0 0 10px 0'
            },
            '& svg.button': {
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        },
        buttons: {
            textAlign: 'center',
            '& a': {
                margin: '20px 10px'
            }
        }
    }
};