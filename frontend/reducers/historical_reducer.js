import { CLEAR_HISTORICAL_PRICES, RECEIVE_HISTORICAL_PRICES } from '../actions/asset_actions';

const historicalReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_HISTORICAL_PRICES:
            nextState[action.range] = Object.assign({}, nextState[action.range], {prices: action.historicalPrices})
            return nextState;
        case CLEAR_HISTORICAL_PRICES:
            return {};
        default:
            return oldState;
    }
}

export default historicalReducer;