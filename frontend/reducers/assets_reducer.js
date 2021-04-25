import {
  RECEIVE_ASSET,
  CLEAR_PRICE,
  CLEAR_ASSET,
  RECEIVE_ALL_ASSETS,
  RECEIVE_COMPANY_INFO,
  RECEIVE_ASSET_INTRADAY,
  RECEIVE_RATING,
  RECEIVE_MULTIPLE_INTRADAY,
  RECEIVE_1WEEK,
  RECEIVE_HISTORICAL_BATCH_PRICES,
  CLEAR_RATING,
} from "../actions/asset_actions";

const assetsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    // case RECEIVE_ALL_ASSETS:
    //     return action.assets;
    case RECEIVE_ASSET:
      action.asset.asset_name = action.asset.companyName;
      action.asset.ticker = action.asset.symbol;
      action.latest_price = action.latest_price;
      nextState[action.asset.symbol] = Object.assign(
        {},
        nextState[action.asset.symbol],
        action.asset
      );
      return nextState;
    case RECEIVE_ASSET_INTRADAY:
      nextState[action.ticker] = Object.assign({}, nextState[action.ticker], {
        data: action.assetIntraday,
      });
      return nextState;
    // nextState[action.ticker]["chartData"] = action.assetIntraday;
    case RECEIVE_1WEEK:
      return (nextState[action.ticker] = Object.assign(
        {},
        nextState[action.ticker],
        { data: action.asset1Week }
      ));
    // return nextState[action.ticker]["1WeekData"] = action.asset1Week;
    case RECEIVE_RATING:
      nextState[action.ticker].rating = action.rating;
      return nextState;
    case RECEIVE_COMPANY_INFO:
      const company = Object.assign(
        {},
        nextState[action.company.symbol],
        action.company
      );
      nextState[company.symbol] = company;
      return nextState;
    case RECEIVE_MULTIPLE_INTRADAY:
      nextState["multiple"] = Object.assign(
        {},
        nextState["multiple"],
        action.multIntraday
      );
      return nextState;
    // return action.multIntraday;
    case RECEIVE_HISTORICAL_BATCH_PRICES:
      if (!nextState["historicalBatch"]) nextState["historicalBatch"] = {};
      nextState["historicalBatch"][action.range] = Object.assign(
        {},
        nextState["historicalBatch"][action.range],
        action.historicalBatchPrices
      );
      return nextState;
    case CLEAR_RATING:
      nextState[action.ticker].rating = {};
      // return {};
      return nextState;
    case CLEAR_ASSET:
      return {};
    default:
      return oldState;
  }
};

export default assetsReducer;
