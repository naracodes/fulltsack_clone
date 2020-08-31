import { RECEIVE_ALL_NEWS, RECEIVE_ASSET_NEWS } from '../actions/news_actions';

const newsReducer = (oldState = {}, action) => {
    debugger
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_NEWS:
            return action.allNews;
        case RECEIVE_ASSET_NEWS:
            debugger
            return Object.assign({}, nextState, action.assetNews);
        default:
            return oldState;
    }
}

export default newsReducer;