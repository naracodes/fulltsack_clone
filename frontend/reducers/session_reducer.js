import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    currentUser: null,
};

const usersReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    debugger

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger;
            return Object.assign({}, { user: action.user })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return oldState;
    }
};

export default usersReducer;