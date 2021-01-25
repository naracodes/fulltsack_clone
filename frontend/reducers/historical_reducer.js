import { RECEIVE_HISTORICAL_PRICES } from '../actions/asset_actions';

const historicalReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_HISTORICAL_PRICES:
            return action.historicalPrices;
        default:
            return oldState;
    }
}

export default historicalReducer;