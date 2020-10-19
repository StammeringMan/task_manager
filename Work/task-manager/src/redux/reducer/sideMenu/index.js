import { TOGGLE_SIDE_MENU_DRAWER_STATE } from '../../actions/sideMenu.js'

const initialState = {
    menuDrawer: false
}


const sideMenuDrawerState = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE_MENU_DRAWER_STATE:
            return {
                ...state,
                menuDrawer: !state.menuDrawer
            };
        default:
            return state;
    }
}

export default sideMenuDrawerState