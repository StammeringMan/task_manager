import { TOGGLE_ADD_TASK_DIALOG_STATE } from '../actions/addTaskDialog.js';

const initialState = {
    dialogState: false,
};

const addTaskDialogState = (state = initialState, action) => {
    switch (action.type.type) {
        case TOGGLE_ADD_TASK_DIALOG_STATE:
            return {
                ...state,
                dialogState: !state.dialogState,
                mode: action.mode
            };
        default:
            return state;
    }
}

export default addTaskDialogState
