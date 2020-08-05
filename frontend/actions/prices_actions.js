export const RECEIVE_ASSET_INTRADAY = "RECEIVE_ASSET_INTRADAY";

export const receiveAssetIntraday = (assetIntraday, ticker) => {
  return {
    type: RECEIVE_ASSET_INTRADAY,
    assetIntraday,
    ticker,
  };
};


export const fetchIntraday = (ticker) => (dispatch) => {
  debugger;
  return AssetAPIUtil.fetchIntraday(ticker).then((assetIntraday) => {
    debugger;
    return dispatch(receiveAssetIntraday(assetIntraday, ticker));
  });
};