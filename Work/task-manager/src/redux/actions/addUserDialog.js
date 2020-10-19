export const TOGGLE_ADD_USER_DIALOG_STATE = 'TOGGLE_ADD_USER_DIALOG_STATE';

export const toggleAddUserDialogState = (state) => {
    return {
        type: TOGGLE_ADD_USER_DIALOG_STATE,
        payload: state
    }
}