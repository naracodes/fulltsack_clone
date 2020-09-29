import * as PortfoAPIUtil from "../util/portfo_api_util";

export const RECEIVE_PORTFO_DATA = "RECEIVE_PORTFO_DATA";

export const receivePortfoData = data => {
    // debugger
  return {
    type: RECEIVE_PORTFO_DATA,
    data,
  };
};

export const fetchPortfoData = () => dispatch => {
    // debugger
  return PortfoAPIUtil.fetchPortfoData().then(data => {
    //   debugger
    return dispatch(receivePortfoData(data));
  });
};
