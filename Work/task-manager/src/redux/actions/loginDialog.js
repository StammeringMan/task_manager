export const TOGGLE_LOGIN_DIALOG_STATE = 'TOGGLE_LOGIN_DIALOG_STATE';

export const toggleLoginDialogState = (state) => {
    return {
        type: TOGGLE_LOGIN_DIALOG_STATE,
        payload: state
    }
}