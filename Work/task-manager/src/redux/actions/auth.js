import AuthServices from '../../services/auth.service'


export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export const register = (email, password) => (dispatch) => {
    return AuthServices.registerUser(email, password)
        .then((response) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response
            })

        })
        .catch((error) => {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error
            })
            throw error
        })
}


export const login = (email, password) => (dispatch) => {
    return AuthServices.logIn(email, password)
        .then((user) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            })
        })
        .catch((error) => {
            dispatch({
                type: LOGIN_FAIL,
                payload: error
            })
            throw error
        })
}

export const logout = () => (dispatch) => {
    AuthServices.logOut();

    dispatch({
        type: LOGOUT
    })
}