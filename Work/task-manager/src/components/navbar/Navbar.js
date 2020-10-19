import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../static/media/logo.svg';
import { connect } from 'react-redux';
import { toggleLoginDialogState } from '../../redux/actions/loginDialog';
import LoginDialog from '../../Dialogs/LoginDialog';
import userState from "../../redux/reducer/auth/index.js"
import store from "../../redux/store.js"
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth.js';
import { toggleSideMenuDrawerState } from '../../redux/actions/sideMenu';
import SideMenu from '../Drawer/SideMenu'
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: '#ffffff',
    },
    menuButton: {
        color: '#9041FE',
        marginRight: 36,
    },
    toolBar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logo: {
        width: 100,
    },
    logoutButton: {
        marginLeft: 'auto',
        color: '#9041FE',
    }
}));



const NavBar = (props) => {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const state = store.getState()

   
    const handleDrawerOpen = () => {
        dispatch(toggleSideMenuDrawerState())
        setOpen(true)
    };


    const handleLogOut = () => {
        if (state.userState.isLoggedIn) {
            dispatch(logout())
        }
        history.push('/')
    }



    return (
        <div className={classes.root}>
            <AppBar position="fixed"
                className={classes.appBar}>
                <Toolbar>
                    {state.userState.isLoggedIn ? <IconButton
                        edge="start"
                        className={clsx(classes.menuButton, open)}
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton> : null}
                    <img src={logo} alt="Logo" className={classes.logo} />
                    {state.userState.isLoggedIn ? <Button variant="outlined" className={classes.logoutButton} onClick={handleLogOut}>Log Out</Button> : null }
                </Toolbar>
            </AppBar>
            <SideMenu />
            <LoginDialog />
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);