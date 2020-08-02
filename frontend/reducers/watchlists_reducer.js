import { RECEIVE_WATCHLIST_ASSETS, RECEIVE_WATCHLIST_ASSET, REMOVE_WATCHLIST_ASSET } from '../actions/watchlist_actions';

const watchlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    debugger
    switch (action.type) {
        case RECEIVE_WATCHLIST_ASSETS:
            debugger
            return action.assets;
        case RECEIVE_WATCHLIST_ASSET:
            debugger
            return action.assets;
        case REMOVE_WATCHLIST_ASSET:
            debugger
            return {};
        default:
            return oldState;
    }
}

export default watchlistsReducer