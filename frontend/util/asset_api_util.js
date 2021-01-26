// const iexKey = `${process.env.REACT_APP_IEX_KEY}`;
// window.apiKey = iexKey;
const iexKey = "pk_9bae36c8264042f68549a11dc83620ac";

export const fetchAssets = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/assets`
    })
}

export const fetchAsset = ticker => {
    return $.ajax({
      method: "GET",
      // url: `https://sandbox.iexapis.com/stable/crypto/${ticker}/quote/?token=${iexKey}`
    //   url: `https://sandbox.iexapis.com/stable/stock/${ticker}/quote/?token=${iexKey}`
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote/?token=${iexKey}`,
    });
}

export const fetchMultipleAssets = (tickersArr) => {
    const tickers = tickersArr.join(',')
    return $.ajax({
        method: 'GET',
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=quote&token=${iexKey}`,
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=quote&token=${iexKey}`,
    })

}

export const fetchIntraday = ticker => { //base 5 min interval
    return $.ajax({
        method: 'GET',
        // url: `https://sandbox.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${iexKey}&chartInterval=5`,
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${iexKey}&chartInterval=5`,
    })
}

export const fetch1Week = ticker => {
  return $.ajax({
    method: "GET",
    url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/5dm?token=${iexKey}`,
  });
};


export const fetchMultipleIntraday = tickersArr => { // 5 min interval
    const tickers = tickersArr.join(',');
    return $.ajax({
      method: "GET",
        // url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=intraday-prices&token=${iexKey}&chartInterval=5`,
      url: `https://cloud.iexapis.com/stable/stock/market/batch/date/20201001?symbols=${tickers}&types=intraday-prices&token=${iexKey}&chartInterval=5`,
    //   url: `https://sandbox.iexapis.com/stable/stock/market/batch/date/20201001?symbols=${tickers}&types=intraday-prices&token=${iexKey}&chartInterval=5`,
    });
}

export const fetchAsset1YData = ticker => {
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/1y/?token=${iexKey}`
    })
}

export const fetchAssetk5YData = ticker => {
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/5y/?token=${iexKey}`
    })
}

export const fetchHistoricalPrices = (ticker, range) => {
  debugger
    return $.ajax({
        method: 'GET',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/${range}?token=${iexKey}`
    })
}


export const fetchCompanyInfo = ticker => {
    return $.ajax({
      method: "GET",
      //   url: `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=${iexKey},
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/company?token=${iexKey}`,
    });
}

export const fetchRating = ticker => {
    return $.ajax({
      method: "GET",
      //   url: `/api/ratings/${ticker}`
      //   url: `https://sandbox.iexapis.com/stable/stock/${ticker}/recommendation-trends?token=${iexKey}`,
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/recommendation-trends?token=${iexKey}`,
    });
}