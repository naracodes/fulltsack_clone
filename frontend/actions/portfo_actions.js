import * as PortfoAPIUtil from "../util/portfo_api_util";

export const RECEIVE_PORTFO_DATA = "RECEIVE_PORTFO_DATA";

export const receivePortfoData = (data, range) => {
  debugger
  return {
    type: RECEIVE_PORTFO_DATA,
    data,
    range,
  };
};

export const fetchPortfoData = range => dispatch => {
  debugger
  return PortfoAPIUtil.fetchPortfoData(range).then(data => {
    debugger
    return dispatch(receivePortfoData(data, range));
  });
};
