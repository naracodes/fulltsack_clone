import { RECEIVE_ASSET, RECEIVE_PRICE, CLEAR_PRICE, CLEAR_ASSET} from '../actions/asset_actions';

const assetsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ASSET:
            action.asset.asset_name = action.asset.companyName;
            action.asset.ticker = action.asset.symbol;
            nextState[action.asset.symbol] = action.asset;
            return nextState;
        case RECEIVE_PRICE:
            action.latestPrice = action.assetPrice;
        case CLEAR_PRICE:
            return {};
        case CLEAR_ASSET:
            return {};
        default:
            return oldState;
    }
}

export default assetsReducer;