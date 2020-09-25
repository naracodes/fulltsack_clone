export const RECEIVE_ASSET_INTRADAY = "RECEIVE_ASSET_INTRADAY";

export const receiveAssetIntraday = (assetIntraday, ticker) => {
  return {
    type: RECEIVE_ASSET_INTRADAY,
    assetIntraday,
    ticker,
  };
};


export const fetchIntraday = (ticker) => (dispatch) => {
  return AssetAPIUtil.fetchIntraday(ticker).then((assetIntraday) => {
    return dispatch(receiveAssetIntraday(assetIntraday, ticker));
  });
};