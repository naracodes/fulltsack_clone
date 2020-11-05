import * as PortfoAPIUtil from "../util/portfo_api_util";

export const RECEIVE_PORTFO_DATA = "RECEIVE_PORTFO_DATA";

export const receivePortfoData = data => {
  return {
    type: RECEIVE_PORTFO_DATA,
    data,
  };
};

export const fetchPortfoData = () => dispatch => {
  return PortfoAPIUtil.fetchPortfoData().then(data => {
    return dispatch(receivePortfoData(data));
  });
};
