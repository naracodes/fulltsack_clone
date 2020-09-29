import { RECEIVE_PORTFO_DATA } from '../actions/portfo_actions'

const portfosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_PORTFO_DATA:
            // debugger
            return action.data.data;
        default:
            return oldState;
    }
};

export default portfosReducer;