import { RECEIVE_ASSET, RECEIVE_PRICE, CLEAR_PRICE, CLEAR_ASSET, RECEIVE_ALL_ASSETS, RECEIVE_COMPANY_INFO,RECEIVE_ASSET_INTRADAY, RECEIVE_NEWS, RECEIVE_QUOTE_AND_NEWS } from '../actions/asset_actions';

const assetsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_ASSETS:
            // debugger
            return action.assets;
        case RECEIVE_ASSET:
            action.asset.asset_name = action.asset.companyName;
            action.asset.ticker = action.asset.symbol;
            action.latest_price = action.latest_price;
            // nextState[action.asset.symbol] = action.asset;
            nextState[action.asset.symbol] = Object.assign({}, nextState[action.asset.symbol], action.asset);
            return nextState;
        case RECEIVE_ASSET_INTRADAY:
            debugger
            // Object.assign({}, nextState[action.ticker].chartData, action.assetIntraday)
            nextState[action.ticker]["chartData"] = action.assetIntraday;
            // const chartData = Object.assign({}, nextState["chartData"], action.assetIntraday)
            // nextState["chartData"] = chartData;
            return nextState;
        // case RECEIVE_QUOTE_AND_NEWS:
        //     debugger
        //     action.asset.asset_name = nextState[action.quoteAndNews.quote.companyName]
        //     action.asset
            
        // case RECEIVE_NEWS:
        //     debugger
        //     nextState[action.ticker]["news"] = action.news;
        //     return nextState;
        case RECEIVE_COMPANY_INFO:
            // debugger
            const company = Object.assign({}, nextState[action.company.symbol], action.company);
            nextState[company.symbol] = company;
            // return action.company;
            return nextState;
        case CLEAR_PRICE:
            return {};
        case CLEAR_ASSET:
            return {};
        default:
            return oldState;
    }
}

export default assetsReducer;