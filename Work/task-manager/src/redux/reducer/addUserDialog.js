import { TOGGLE_ADD_USER_DIALOG_STATE } from '../actions/addUserDialog.js';

const initialState = {
    dialogState: false,
};

const addUserDialogState = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_USER_DIALOG_STATE:
            return {
                ...state,
                dialogState: !state.dialogState,
            };
        default:
            return state;
    }
}

export default addUserDialogState
