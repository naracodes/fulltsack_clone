import * as HoldingAPIUtil from "../util/holding_api_util";

export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";

export const receiveHoldings = holdings => {
    // debugger
  return {
    type: RECEIVE_HOLDINGS,
    holdings,
  };
};

export const fetchHoldings = () => dispatch => {
    // debugger
    return HoldingAPIUtil.fetchHoldings().then(holdings => {
        // debugger
        return dispatch(receiveHoldings(holdings));
    })
}