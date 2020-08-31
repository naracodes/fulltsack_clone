import { RECEIVE_WATCHLIST_ASSETS, RECEIVE_WATCHLIST_ASSET, REMOVE_WATCHLIST_ASSET } from '../actions/watchlist_actions';

const watchlistsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_WATCHLIST_ASSETS:
            return action.assets;
        case RECEIVE_WATCHLIST_ASSET:
            return action.assets;
        case REMOVE_WATCHLIST_ASSET:
            return {};
        default:
            return oldState;
    }
}

export default watchlistsReducer