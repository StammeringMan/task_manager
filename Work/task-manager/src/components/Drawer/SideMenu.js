import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Typography, IconButton } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AssignmentIcon from '@material-ui/icons/Assignment';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import store from "../../redux/store.js"
import { toggleSideMenuDrawerState } from '../../redux/actions/sideMenu';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },

    homeButton: {
        justifyContent: 'space-between',
        textDecoration: "none",
        color: "inherit"
    },

    menuItemsParentContainer: {
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuItemsChildContainer: {
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        textDecoration: "none",
        color: "inherit"
    }
}))


const SideMenu = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const state = store.getState();
    const dispatch = useDispatch();
    const menuItems = [
        {
            "name": "Users",
            "icon": GroupIcon,
            "children": [
                {
                    "name": "All Users",
                    "icon": PeopleAltIcon,
                    "path": "/users"
                },
            ]
        },
        {
            "name": "Task",
            "icon": WorkIcon,
            "children": [
                {
                    "name": "All Tasks",
                    "icon": AssignmentIcon,
                    "path": "/tasks"
                }
            ]
        }
    ]

    const handleDrawerClose = () => {
        dispatch(toggleSideMenuDrawerState())
    }

    return (
        <div className={classes.root}>
            <Drawer
                open={state.sideMenuDrawerState.menuDrawer}
                anchor="left"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <Typography variant="h6">
                       <Link to='/' onClick={handleDrawerClose} className={classes.homeButton}> 
                       Home
                       </Link>
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <ListItem button>
                                <div className={classes.menuItemsParentContainer}>
                                    <ListItemIcon>{<item.icon />}</ListItemIcon>
                                    <ListItemText primary={item.name}></ListItemText>
                                    <ListItemText>{item.children.length ? <KeyboardArrowDownIcon /> : null}</ListItemText>
                                </div>
                            </ListItem>
                            <div>
                                {item.children.map((child, index) => (
                                    <div key={index}>
                                        <ListItem button onClick={handleDrawerClose}>
                                            <div>
                                                <Link to={child.path}  className={classes.menuItemsChildContainer}>
                                                    <ListItemIcon>{<child.icon />}</ListItemIcon>
                                                    <ListItemText primary={child.name}></ListItemText>
                                                </Link>
                                            </div>
                                        </ListItem>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </List>
            </Drawer>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        sideMenuDrawerState: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSideMenuDrawerState: () => dispatch(toggleSideMenuDrawerState()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)