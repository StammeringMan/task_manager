import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Divider, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import store from '../redux/store.js';
import { toggleLoginDialogState } from '../redux/actions/loginDialog'
import { register, login } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import userState from '../redux/reducer/auth';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },

    dialogContent: {
        paddingTop: '10px',
        paddingBottom: '10px'
    },
    formInput: {
        paddingTop: '5px',
        paddingBottom: '5px'
    },
    dialogActions: {
        paddingTop: '10px',
        paddingBottom: '10px'
    },
}))

const LoginDialog = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [openSnackBar, setOpenSnackBar] = React.useState(false)
    const state = store.getState();

    let payload = {
        email: '',
        password: ''
    }

    const handleEmailChange = (value) => {
        payload.email = value
    }

    const handlePasswordChange = (value) => {
        payload.password = value
    }

    const handleClose = () => {
        setOpenSnackBar(false)
    }

    const handleSignUp = () => {
        dispatch(register(payload.email, payload.password))
        .then(() => { })
            .catch((error) => {
                setOpenSnackBar(true)
            })
        dispatch({
            type: toggleLoginDialogState(),
            mode: null
        })

    }

    const handleSignIn = async () => {
        await dispatch(login(payload.email, payload.password))
            .then((response) => {})
            .catch((error) => {
                console.log(error)
                setOpenSnackBar(true)
            })
        dispatch({
            type: toggleLoginDialogState(),
            mode: null
        })

    }

    const handleLoginDialogClose = () => {
        dispatch({
            type: toggleLoginDialogState(),
            mode: null
        })
    }

    return (
        <div className={classes.root}>
            <Grid container
                className={classes.dialogContent}
                direction="column"
                justify="center"
                alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Dialog
                        fullWidth={true}
                        maxWidth='sm'
                        className={classes.dialogContainer}
                        open={state.loginDialogState.dialogState}
                        aria-labelledby="login-dialog-title"
                        aria-describedby="login-dialog-description">
                        <DialogTitle id="login-dialog-title">{state.loginDialogState.mode === 'signUp' ? 'Sign Up' : 'Sign In'}</DialogTitle>
                        <Divider />
                        <DialogContent>
                            <Grid container
                                className={classes.dialogContent}
                                direction="column"
                                justify="center"
                                alignItems="center">
                                <Grid item>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        className={classes.formInput}
                                        label="Enter Email Address"
                                        type="email"
                                        fullWidth={true}
                                        onChange={(event) => handleEmailChange(event.target.value)}></TextField>
                                </Grid>

                                <Grid item>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="password"
                                        className={classes.formInput}
                                        label="Enter Password"
                                        type="password"
                                        fullWidth={true}
                                        onChange={(event) => handlePasswordChange(event.target.value)}></TextField>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <Divider />
                        <DialogActions>
                            <Grid container
                                className={classes.dialogActions}
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item>
                                    <Button onClick={() => handleLoginDialogClose()} color="secondary" variant="contained">
                                        Cancel
                            </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="primary" variant="contained" onClick={state.loginDialogState.mode === "signUp" ? handleSignUp : handleSignIn}>
                                        {state.loginDialogState.mode === "signUp" ? 'Sign Up' : 'Sign In'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnackBar}
                message={state.userState.error}
                autoHideDuration={5000}
                onClose={handleClose}></Snackbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginDialogState: state,
        userState: state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleLoginDialogState: () => dispatch(toggleLoginDialogState()),
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)