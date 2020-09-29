import { RECEIVE_ASSET, CLEAR_PRICE, CLEAR_ASSET, RECEIVE_ALL_ASSETS, RECEIVE_COMPANY_INFO,RECEIVE_ASSET_INTRADAY, RECEIVE_RATING, RECEIVE_MULTIPLE_INTRADAY } from '../actions/asset_actions';

const assetsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_ASSETS:
            return action.assets;
        case RECEIVE_ASSET:
            action.asset.asset_name = action.asset.companyName;
            action.asset.ticker = action.asset.symbol;
            action.latest_price = action.latest_price;
            nextState[action.asset.symbol] = Object.assign({}, nextState[action.asset.symbol], action.asset);
            return nextState;
        case RECEIVE_ASSET_INTRADAY:
            nextState[action.ticker]["chartData"] = action.assetIntraday;
            return nextState;
        case RECEIVE_RATING:
            nextState[action.ticker].rating = action.rating;
            return nextState;
        case RECEIVE_COMPANY_INFO:
            const company = Object.assign({}, nextState[action.company.symbol], action.company);
            nextState[company.symbol] = company;
            return nextState;
        case RECEIVE_MULTIPLE_INTRADAY:
            debugger
            return action.multIntraday;
        case CLEAR_ASSET:
            return {};
        default:
            return oldState;
    }
}

export default assetsReducer;