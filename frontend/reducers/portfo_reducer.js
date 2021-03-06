import { RECEIVE_PORTFO_DATA } from '../actions/portfo_actions'

const portfosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_PORTFO_DATA:
            nextState[action.range] = Object.assign({}, nextState[action.range], action.data)
            return nextState;
            // return action.data.data;
        default:
            return oldState;
    }
};

export default portfosReducer;