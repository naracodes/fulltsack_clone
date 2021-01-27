import * as HoldingAPIUtil from "../util/holding_api_util";

export const RECEIVE_HOLDINGS = "RECEIVE_HOLDINGS";

export const receiveHoldings = holdings => {
  return {
    type: RECEIVE_HOLDINGS,
    holdings,
  };
};

export const fetchHoldings = () => dispatch => {
    return HoldingAPIUtil.fetchHoldings().then(holdings => {
        return dispatch(receiveHoldings(holdings));
    })
}