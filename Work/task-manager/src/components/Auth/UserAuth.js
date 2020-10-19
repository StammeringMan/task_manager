import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Button } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import { toggleLoginDialogState } from '../../redux/actions/loginDialog';
import userState from "../../redux/reducer/auth/index.js"
import authImg from "../../static/media/auth.svg";
import LoginDialog from '../../Dialogs/LoginDialog';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${authImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },

    authBtn: {
        paddingTop: "10px",
        paddingRight: "30px",
        paddingBottom: "10px",
        paddingLeft: "30px",
        color: '#9041FE',

    }
}))

const UserAuth = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleAuth = (mode) => dispatch({
        type: toggleLoginDialogState(),
        mode: mode
    })


    return (
        <div className={classes.root}>
            <Grid container spacing={2}
                direction="row"
                alignItems="center"
                justify="center">
                <Grid item xs={12} sm={6} lg={8} xl={8}>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={4}>
                    <Grid container
                        direction="row"
                        alignItems="center"
                        justify="center">
                        <Grid item xs={6} sm={6} lg={6} xl={6} align="center">
                            <Button variant="outlined" className={classes.authBtn} onClick={() => handleAuth('signUp')}>Sign Up</Button>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={6} xl={6} align="center">
                            <Button variant="outlined" className={classes.authBtn} onClick={() => handleAuth('signIn')}>Sign In</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
            <LoginDialog />
        </div >
    )
}

const mapStateToProps = state => {
    return {
        addTaskDialogState: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleLoginDialogState: () => dispatch(toggleLoginDialogState()),
        userState: () => dispatch(userState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth)