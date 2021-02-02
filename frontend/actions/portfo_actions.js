import * as PortfoAPIUtil from "../util/portfo_api_util";

export const RECEIVE_PORTFO_DATA = "RECEIVE_PORTFO_DATA";

export const receivePortfoData = (data, range) => {
  return {
    type: RECEIVE_PORTFO_DATA,
    data,
    range,
  };
};

export const fetchPortfoData = (range="1D") => dispatch => {
  return PortfoAPIUtil.fetchPortfoData(range="1D").then(data => {
    return dispatch(receivePortfoData(data, range="1D"));
  });
};
