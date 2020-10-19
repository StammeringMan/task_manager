import { combineReducers } from 'redux';
import loginDialogState from './loginDialog';
import userState from './auth'
import sideMenuDrawerState from './sideMenu'
import addTaskDialogState from './addTaskDialog.js'
import addUserDialogState from './addUserDialog.js'

export default combineReducers({
    loginDialogState,
    userState,
    sideMenuDrawerState,
    addTaskDialogState,
    addUserDialogState

})