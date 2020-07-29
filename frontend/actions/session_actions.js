import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = user => {
    // debugger
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

export const logoutCurrentUser = () => {
    debugger
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

export const receiveErrors = errors => {
    debugger
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const createNewUser = user => dispatch => {
    // debugger;
    return APIUtil.signup(user).then(response => {
        debugger
        return dispatch(receiveCurrentUser(response))
    }, err => {
        debugger
        return dispatch(receiveErrors(err.responseJSON))
    })
}

export const login = user => dispatch => {
    debugger
    return APIUtil.login(user).then(response => {
        debugger
        return dispatch(receiveCurrentUser(response))
    }, err => {
        debugger
        return dispatch(receiveErrors(err.responseJSON))
    })
}

// export const login = user => dispatch => (
//     APIUtil.login(user).then(user => (
//         dispatch(receiveCurrentUser(user))
//     ), err => (
//         dispatch(receiveErrors(err.responseJSON))
//     ))
// );


export const logout = () => dispatch => {
    debugger
    return APIUtil.logout().then(() => {
        return dispatch(logoutCurrentUser())
    })
}
