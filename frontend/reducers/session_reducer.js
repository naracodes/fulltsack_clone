import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
    user: null,
};

const usersReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { currentUser: action.user })
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return oldState;
    }
};

export default usersReducer;