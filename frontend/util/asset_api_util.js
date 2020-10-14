export const fetchAssets = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/assets`
    })
}

export const fetchAsset = ticker => {
    return $.ajax({
      method: "GET",
      // url: `https://sandbox.iexapis.com/stable/crypto/${ticker}/quote/?token=Tpk_9cc6c16a40494338943d728d111e9998`
    //   url: `https://sandbox.iexapis.com/stable/stock/${ticker}/quote/?token=Tpk_9cc6c16a40494338943d728d111e9998`
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote/?token=pk_9bae36c8264042f68549a11dc83620ac`,
    });
}

export const fetchMultipleAssets = (tickersArr) => {
    const tickers = tickersArr.join(',')
    return $.ajax({
        method: 'GET',
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=quote&token=Tpk_9cc6c16a40494338943d728d111e9998`,
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=quote&token=pk_9bae36c8264042f68549a11dc83620ac`,
    })

}

export const fetchIntraday = ticker => { //base 5 min interval
    return $.ajax({
        method: 'GET',
        // url: `https://sandbox.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=Tpk_9cc6c16a40494338943d728d111e9998&chartInterval=5`,
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=pk_9bae36c8264042f68549a11dc83620ac&chartInterval=5`,
    })
}

export const fetch1Week = ticker => {
  return $.ajax({
    method: "GET",
    url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/5dm?token=Tpk_9cc6c16a40494338943d728d111e9998`,
  });
};


export const fetchMultipleIntraday = tickersArr => { // 5 min interval
    const tickers = tickersArr.join(',');
    return $.ajax({
      method: "GET",
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=intraday-prices&token=Tpk_9cc6c16a40494338943d728d111e9998&chartInterval=5`,
      url: `https://cloud.iexapis.com/stable/stock/market/batch/date/20201001?symbols=${tickers}&types=intraday-prices&token=pk_9bae36c8264042f68549a11dc83620ac&chartInterval=5`,
    //   url: `https://sandbox.iexapis.com/stable/stock/market/batch/date/20201001?symbols=${tickers}&types=intraday-prices&token=Tpk_9cc6c16a40494338943d728d111e9998&chartInterval=5`,
    });
}

export const fetchAsset1YData = ticker => {
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/1y/?token=Tpk_9cc6c16a40494338943d728d111e9998`
    })
}

export const fetchAssetk5YData = ticker => {
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/5y/?token=Tpk_9cc6c16a40494338943d728d111e9998`
    })
}


export const fetchCompanyInfo = ticker => {
    return $.ajax({
      method: "GET",
      //   url: `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=Tpk_9cc6c16a40494338943d728d111e9998,
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/company?token=pk_9bae36c8264042f68549a11dc83620ac`,
    });
}

export const fetchRating = ticker => {
  debugger
    return $.ajax({
      method: "GET",
      //   url: `/api/ratings/${ticker}`
      //   url: `https://sandbox.iexapis.com/stable/stock/${ticker}/recommendation-trends?token=Tpk_9cc6c16a40494338943d728d111e9998`,
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/recommendation-trends?token=pk_9bae36c8264042f68549a11dc83620ac`,
    });
}