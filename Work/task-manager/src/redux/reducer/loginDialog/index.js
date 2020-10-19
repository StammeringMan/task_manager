import { TOGGLE_LOGIN_DIALOG_STATE } from '../../actions/loginDialog.js';

const initialState = {
    dialogState: false,
};

const loginDialogState = (state = initialState, action) => {
    switch (action.type.type) {
        case TOGGLE_LOGIN_DIALOG_STATE:
            return {
                ...state,
                dialogState: !state.dialogState,
                mode: action.mode
            };
        default:
            return state;
    }
}

export default loginDialogState
