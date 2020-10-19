export const TOGGLE_SIDE_MENU_DRAWER_STATE = 'TOGGLE_SIDE_MENU_DRAWER_STATE';

export const toggleSideMenuDrawerState = (state) => {
    return {
        type: TOGGLE_SIDE_MENU_DRAWER_STATE,
        payload: Boolean
    }
}