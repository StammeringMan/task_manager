import React from 'react';
import { List, ListItem, ListItemText, Grid, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mainImg from "./mainImg.svg"
import { connect } from 'react-redux';
import { toggleLoginDialogState } from '../../redux/actions/loginDialog';
import LoginDialog from '../../Dialogs/LoginDialog';
import userState from '../../redux/reducer/auth/index.js';
import store from '../../redux/store.js';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
    },
    paper: {
        height: '540px',
        borderRadius: 10
    },

    mainSectionContainer: {
        height: '100%'
    },
    leftSectionContainer: {
        height: '100%'
    },
    headerDescription: {
        display: 'flex',
        alignItems: 'center'
    },
    bullets: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: "#C35FFD",
        marginRight: 10
    },
    loginButton: {
        marginTop: 50,
        color: '#C35FFD'
    },
    mainImg: {
        width: '100%',
    },
    toggleMenuInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-around",
        width: 150,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },
    toggleMenuIcon: {
        color: '#C35FFD'
    }
}))

const HomePage = (props) => {
    const classes = useStyles();
    const state = store.getState()

    return (
        <div className={classes.root}>
            <Grid container spacing={2}
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item xs={12} sm={12} lg={12}>
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className={classes.paper}
                    >
                        <Grid container
                            className={classes.mainSectionContainer}
                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                <Grid container
                                    className={classes.leftSectionContainer}
                                    direction="column"
                                    justify="space-around"
                                    alignItems="center">
                                    <Grid item xs={10} sm={10} lg={10} xl={10}
                                        align="center">
                                        <Typography variant="h5">
                                            Task Management
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={10} sm={10} lg={10} xl={10}
                                        align="center">
                                        <Grid container
                                            direction="column"
                                            justify="space-evenly"
                                            alignItems="center">
                                            <Grid item xs={12} sm={12} lg={12} xl={12}>
                                                <List>
                                                    <ListItem>
                                                        <ListItemText>
                                                            <div className={classes.headerDescription}>
                                                                <div className={classes.bullets}></div>
                                                                <Typography variant="subtitle1">
                                                                    Plan: Assign Tasks to User
                                                            </Typography>
                                                            </div>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText>
                                                            <div className={classes.headerDescription}>
                                                                <div className={classes.bullets}></div>
                                                                <Typography variant="subtitle1">
                                                                    Track: Get Task Status in Real Time
                                                            </Typography>
                                                            </div>
                                                        </ListItemText>
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemText>
                                                            <div className={classes.headerDescription}>
                                                                <div className={classes.bullets}></div>
                                                                <Typography variant="subtitle1">
                                                                    Release: Complete the Task Life-Cycle
                                                            </Typography>
                                                            </div>
                                                        </ListItemText>
                                                    </ListItem>
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={10} sm={10} lg={10} xl={10}
                                        align="center">
                                        {
                                            state.userState.isLoggedIn ?
                                                <Paper
                                                    variant="elevation"
                                                    elevation={2}>
                                                    <div className={classes.toggleMenuInfo}>
                                                        <div>
                                                            <ChevronLeftIcon className={classes.toggleMenuIcon} />
                                                        </div>
                                                        <Typography variant="subtitle2">
                                                            Toggle Menu
                                                    </Typography>
                                                    </div>
                                                </Paper> : <Button variant="outlined" className={classes.loginButton} onClick={props.toggleLoginDialogState}>{state.userState.isRegistered ? 'Log In' : 'Get Started'}</Button>}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <LoginDialog />

                            <Grid item xs={12} sm={6} lg={6} xl={6}>
                                <Grid container
                                    direction="row"
                                    justify="center"
                                    alignItems="center">
                                    <Grid item xs={10} sm={10} lg={10} xl={10}>
                                        <img src={mainImg} alt="Main" className={classes.mainImg} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginDialogState: state,
        userState: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleLoginDialogState: () => dispatch(toggleLoginDialogState()),
        userState: () => dispatch(userState())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)