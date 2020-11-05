import { RECEIVE_ALL_ASSETS } from '../actions/asset_actions';

const searchReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_ASSETS:
            debugger
            return action.assets;
        default:
            return oldState;
    }
}

export default searchReducer;