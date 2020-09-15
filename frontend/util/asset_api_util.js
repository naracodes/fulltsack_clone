export const fetchAssets = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/assets`
    })
}

export const fetchAsset = ticker => {
    return $.ajax({
        method: 'GET',
        // url: `https://sandbox.iexapis.com/stable/crypto/${ticker}/quote/?token=Tpk_9cc6c16a40494338943d728d111e9998`
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/quote/?token=Tpk_9cc6c16a40494338943d728d111e9998`
    })
}

export const fetchPrice = ticker => {
    return $.ajax({
        method: 'GET',
        // url: `https://sandbox.iexapis.com/stable/crypto/btcusd/quote/latestPrice?token=Tpk_9cc6c16a40494338943d728d111e9998`
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/price?token=Tpk_9cc6c16a40494338943d728d111e9998`
    })
}

export const fetchMultipleAssets = (tickersArr) => {
    const tickers = tickersArr.join(',')
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${tickers}&types=quote&token=Tpk_9cc6c16a40494338943d728d111e9998`
    })

}

export const fetchIntraday = ticker => { //base 5 min interval
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=Tpk_9cc6c16a40494338943d728d111e9998&chartInterval=5`
    })
}

export const fetchAssetStats = ticker => {
    return $.ajax({
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/stats/?token=Tpk_9cc6c16a40494338943d728d111e9998`
    })
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
        method: 'GET',
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=Tsk_498db2929da24682a573da9403ff8a2a`
    })
}

export const fetchRating = ticker => {
    debugger
    return $.ajax({
      method: "GET",
      url: `https://sandbox.iexapis.com/stable/stock/${ticker}/recommendation-trends?token=Tsk_498db2929da24682a573da9403ff8a2a`,
    });
}