import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MySnackbarContent from './MySnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import green from '@material-ui/core/colors/green';

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);
// snackbarUserDoesNotExist

const MainSnackbar = (props) => {
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{
          vertical: props.snackbarVertical,
          horizontal: props.snackbarHorizontal
        }}
        open={props.snackbarLogOut}
        onClose={props.handleSnackbarClose}
        autoHideDuration={2000}
      >
        <MySnackbarContentWrapper
          onClose={props.handleSnackbarClose}
          variant="success"
          message="Logged out successfully!"
        />
      </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: props.snackbarVertical,
            horizontal: props.snackbarHorizontal
          }}
          open={props.snackbarPasswordMismatch}
          onClose={props.handleSnackbarClose}
          autoHideDuration={2000}
        >
          <MySnackbarContentWrapper
            onClose={props.handleSnackbarClose}
            variant="error"
            message="Password does not match"
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: props.snackbarVertical,
            horizontal: props.snackbarHorizontal
          }}
          open={props.snackbarUserDoesNotExist}
          onClose={props.handleSnackbarClose}
          autoHideDuration={2000}
        >
          <MySnackbarContentWrapper
            onClose={props.handleSnackbarClose}
            variant="error"
            message="User does not exist"
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: props.snackbarVertical,
            horizontal: props.snackbarHorizontal
          }}
          open={props.snackbarOpenSignIn}
          onClose={props.handleSnackbarClose}
          autoHideDuration={2000}
        >
          <MySnackbarContentWrapper
            onClose={props.handleSnackbarClose}
            variant="success"
            message="Logged in successful!"
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: props.snackbarVertical,
            horizontal: props.snackbarHorizontal
          }}
          open={props.snackbarOpenSignUp}
          onClose={props.handleSnackbarClose}
          autoHideDuration={2000}
        >
          <MySnackbarContentWrapper
            onClose={props.handleSnackbarClose}
            variant="success"
            message="User successfully created!"
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: props.snackbarVertical,
            horizontal: props.snackbarHorizontal
          }}
          open={props.snackbarOpenSignUpError}
          onClose={props.handleSnackbarClose}
          autoHideDuration={2000}
        >
          <MySnackbarContentWrapper
            onClose={props.handleSnackbarClose}
            variant="error"
            message="User already exists!"
          />
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: props.snackbarVertical,
            horizontal: props.snackbarHorizontal
          }}
          open={props.snackbarAuthRedirect}
          onClose={props.handleSnackbarClose}
          autoHideDuration={2000}
        >
          <MySnackbarContentWrapper
            onClose={props.handleSnackbarClose}
            variant="error"
            message="Please Sign In"
          />
        </Snackbar>
    </React.Fragment>
  )
}

export default MainSnackbar