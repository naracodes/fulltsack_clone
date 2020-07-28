import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

export const createNewUser = user => dispatch => {
    return APIUtil.signup(user).then(response => {
        return dispatch(receiveCurrentUser(user))
    })
}

export const login = user => dispatch => {
    return APIUtil.login(user).then(response => {
        return dispatch(receiveCurrentUser(user))
    })
}

export const logout = () => dispatch => {
    return APIUtil.logout().then(() => {
        return dispatch(logoutCurrentUser())
    })
}
