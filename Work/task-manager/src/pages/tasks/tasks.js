import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from "moment";
import { connect, useDispatch } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { toggleAddTaskDialogState } from '.././../redux/actions/addTaskDialog.js'
import AddTaskDialog from  '../../Dialogs/AddTaskDialog.js'

const localizer = momentLocalizer(moment);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    mainContainer: {
        width: "100%",
        height: "100%"
    },
    addTaskSection: {
        height: "10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 10,
        marginTop: 10
    },
    calendarSection: {
        height: "90%",
        marginLeft: 10,
        marginRight: 10
    },
    addIcon: {
        marginRight: 20
    },
    calendar: {
        width: "100%",
        height: "100%"
    }

}))

const TasksPage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const events = [
        {
            'title': 'My event',
            'allDay': false,
            'start': new Date(2020, 9, 14, 10, 0, 0), // 10.00 AM
            'end': new Date(2020, 9, 14, 14, 0, 0) // 2.00 PM 
        }
    ];

    const handleAddTaskDialog = (mode) => {
        dispatch({
            type: toggleAddTaskDialogState(),
            mode: 'create'
        })
    }

    return (
        <div className={classes.root}>
            <Grid container
                className={classes.mainContainer}
                direction="row"
                alignContent="center"
                justify="center">
                <Grid item xs={12} sm={12} md={12} lg={12}
                    className={classes.addTaskSection}>

                    <Fab aria-label="add" className={classes.addIcon} onClick={handleAddTaskDialog}>
                        <AddIcon fontSize="large" />
                    </Fab>

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}
                    className={classes.calendarSection}>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        step={30}
                        className={classes.calendar}
                    />
                </Grid>
                <AddTaskDialog />
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addTaskDialogState: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleAddTaskDialogState: () => dispatch(toggleAddTaskDialogState()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksPage)