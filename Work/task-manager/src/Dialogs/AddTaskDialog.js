import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Divider, Snackbar } from '@material-ui/core';
import store from '../redux/store.js';
import { connect, useDispatch } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { toggleAddTaskDialogState } from '../redux/actions/addTaskDialog.js'
import addTaskDialogState from '../redux/reducer/addTaskDialog.js'
import { createTask } from '../redux/actions/addTaskDialog.js'
import UserService from '../services/user.service.js';

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

}));


const AddTaskDialog = (props) => {
    const classes = useStyles();
    const state = store.getState();
    const dispatch= useDispatch();

    let payload = {
        title: '',
        expiryDate: '',
        assignedTo: '',
        description: ''
    }

    let users = []


    const handleTitleChange = (value) => {
        payload.title = value;
    }

    const handleDateChange = (date) => {
        payload.expiryDate = date;
    }

    const handleDescChange = (value) => {
        payload.description = value
    }

    const handleCreateTask = () => {
        dispatch(createTask)
        dispatch({
            type: toggleAddTaskDialogState(),
            mode: null
        })
    }

    const handleAddTaskDialogClose = () => {
        dispatch({
            type: toggleAddTaskDialogState(),
            mode: null
        })
    }

    const handleUserSearch = (event, value) => {
        console.log('lllllll', value)
        UserService.getUserByQuery(value)
        .then((response) => {
        })
        .catch((err) => {
            console.log(err);
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
                        maxWidth='md'
                        className={classes.dialogContainer}
                        open={state.addTaskDialogState.dialogState}
                        aria-labelledby="add-task-dialog-title"
                        aria-describedby="add-task-dialog-description">
                        <DialogTitle id="add-task-dialog-title">{state.addTaskDialogState.mode === 'create' ? 'Create Task' : 'Edit Task'}</DialogTitle>
                        <Divider />
                        <DialogContent>
                            <Grid container
                                className={classes.dialogContent}
                                direction="row"
                                justify="space-between"
                                alignItems="center">
                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="email"
                                        className={classes.formInput}
                                        label="Enter Title"
                                        type="email"
                                        fullWidth={true}
                                        onChange={(event) => handleTitleChange(event.target.value)}></TextField>
                                </Grid>

                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            // value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>


                                <Grid item xs={12} sm={3} md={3} lg={3}>
                                    <Autocomplete
                                        freeSolo
                                        id="assign-user"
                                        disableClearable
                                        onInputChange={handleUserSearch}
                                        options={users.map((user) => user.name)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Search Users.."
                                                margin="normal"
                                                variant="outlined"
                                                InputProps={{ ...params.InputProps, type: 'search' }}
                                            />
                                        )}
                                    />

                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="desc"
                                        className={classes.formInput}
                                        label="Enter Description"
                                        type="password"
                                        fullWidth={true}
                                        onChange={(event) => handleDescChange(event.target.value)}></TextField>
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
                                    <Button onClick={handleAddTaskDialogClose} color="secondary" variant="contained">
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color="primary" variant="contained" onClick={handleCreateTask}>
                                        Create Task
                                    </Button>
                                </Grid>
                            </Grid>
                        </DialogActions>
                    </Dialog>
                </Grid>
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
        addTaskDialogState: () => dispatch(addTaskDialogState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskDialog)
