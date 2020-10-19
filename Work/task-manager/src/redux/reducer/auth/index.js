import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../../actions/auth';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { isLoggedIn: true, user} : { isLoggedIn: false, user: null, isRegistered: false, error: null}

const userState = (state = initialState, action) => {
    const {payload} = action
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                isRegistered: true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                error: payload.message
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                error: payload.message
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state;
    }
} 

export default userState 