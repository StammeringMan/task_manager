import TaskService from '../../services/task.service';


export const TOGGLE_ADD_TASK_DIALOG_STATE = 'TOGGLE_ADD_TASK_DIALOG_STATE';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAIL = 'CREATE_TASK_FAIL';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAIL = 'EDIT_TASK_FAIL';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAIL = 'DELETE_TASK_FAIL';



export const toggleAddTaskDialogState = (state) => {
    return {
        type: TOGGLE_ADD_TASK_DIALOG_STATE,
        payload: state
    }
}


export const createTask = (task) => (dispatch) => {
    return TaskService.createTask(task)
    .then((response) => {
        dispatch({
            type: CREATE_TASK_SUCCESS,
            payload: response
        })
    })
    .catch((error) => {
        dispatch({
            type: CREATE_TASK_FAIL,
            payload: error
        })
        throw error;
    })
}

export const updateTask = (id) => (dispatch) => {
    return TaskService.updateTask(id)
    .then((response) => {
        dispatch({
            type: EDIT_TASK_SUCCESS,
            payload: response
        })
    })
    .catch((error) => {
        dispatch({
            type: EDIT_TASK_FAIL,
            payload: error
        })
        throw error;
    })
}

export const deleteTask = (id) => (dispatch) => {
    return TaskService.deleteTask(id)
    .then((response) => {
        dispatch({
            type: DELETE_TASK_SUCCESS,
            payload: response
        })
    })
    .catch((error) => {
        dispatch({
            type: DELETE_TASK_FAIL,
            payload: error
        })
        throw error;
    })
}