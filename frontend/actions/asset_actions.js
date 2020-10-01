import * as AssetAPIUtil from '../util/asset_api_util';

export const RECEIVE_ALL_ASSETS = "RECEIVE_ALL_ASSETS"
export const RECEIVE_ASSETS = "RECEIVE_ASSETS" //GET QUOTES FOR MULTIPLE TICKERS
export const RECEIVE_ASSET = "RECEIVE_ASSET"
export const RECEIVE_ASSET_STATS = "RECEIVE_ASSET_STATS"
export const RECEIVE_ASSET_INTRADAY = "RECEIVE_ASSET_INTRADAY";
export const RECEIVE_MULTIPLE_INTRADAY = "RECEIVE_MULTIPLE_INTRADAY";
export const RECEIVE_PRICE = "RECEIVE_PRICE";
export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO";
export const RECEIVE_NEWS = "RECEIVE_NEWS";
export const RECEIVE_RATING = "RECEIVE_RATING";
export const CLEAR_PRICE = "CLEAR_PRICE";
export const CLEAR_ASSET = "CLEAR_ASSET";


export const receiveAllAssets = assets => {
    return {
        type: RECEIVE_ALL_ASSETS,
        assets
    }
}

export const receiveAssets = assets => {
    return {
        type: RECEIVE_ASSETS,
        assets
    }
}

export const receiveAsset =  asset => {
    return {
        type: RECEIVE_ASSET,
        asset
    }
}

export const receiveAssetStats = assetStats => {
    return {
        type: RECEIVE_ASSET_STATS,
        assetStats
    }
}

export const receiveAssetIntraday = (assetIntraday, ticker) => {
    return {
        type: RECEIVE_ASSET_INTRADAY,
        assetIntraday,
        ticker,
    }
}

export const receiveMultipleIntraday = multIntraday => {
    debugger
    return {
        type: RECEIVE_MULTIPLE_INTRADAY,
        multIntraday,
    }
}

export const receiveNews = (news, ticker) => {
    return {
        type: RECEIVE_ASSET_INTRADAY,
        news,
        ticker,
    }
}

export const receiveRating = (rating, ticker) => {
    return {
        type: RECEIVE_RATING,
        rating,
        ticker,
    }
}

export const receivePrice = assetPrice => {
    return {
        type: RECEIVE_PRICE,
        assetPrice
    }
}

export const receiveCompanyInfo = company => {
    return {
        type: RECEIVE_COMPANY_INFO,
        company,
    }
}

export const clearPrice = () => {
    return {
        type: CLEAR_PRICE,
    }
}

export const clearAsset = () => {
    return {
        type: CLEAR_ASSET,
    }
}

export const fetchAssets = () => dispatch => {
    return AssetAPIUtil.fetchAssets().then(assets => {
        return dispatch(receiveAllAssets(assets))
    })
}

let cachedAssetQuote = {};
//later add logic to check if close prop of response is the same as cached, and add if/else
export const fetchAsset = ticker => dispatch => {
    if (cachedAssetQuote[ticker]) {
        return dispatch(receiveAsset(cachedAssetQuote[ticker]));
    } else {
        return AssetAPIUtil.fetchAsset(ticker).then(asset => {
            cachedAssetQuote[ticker] = asset;
            return dispatch(receiveAsset(asset))
        });
    }
}

let cachedCompanyInfo = {};
export const fetchCompanyInfo = ticker => dispatch => {
    if (cachedCompanyInfo[ticker]) {
        return dispatch(receiveCompanyInfo(cachedCompanyInfo[ticker]));
    } else {
        return AssetAPIUtil.fetchCompanyInfo(ticker).then(company => {
            cachedCompanyInfo[ticker] = company;
            return dispatch(receiveCompanyInfo(company));
        })
    }
}

let cachedIntraday = {};
let lastFetched = {};
export const fetchIntraday = ticker => dispatch => {
    let timeNow = new Date().getTime();
    if (cachedIntraday[ticker] && (timeNow - lastFetched[ticker] < 300000)) {
        return dispatch(receiveAssetIntraday(cachedIntraday[ticker], ticker));
    } else {
        return AssetAPIUtil.fetchIntraday(ticker).then(assetIntraday => {
            cachedIntraday[ticker] = assetIntraday;
            lastFetched[ticker] = new Date().getTime();
            return dispatch(receiveAssetIntraday(assetIntraday, ticker));
        });
    }
}

export const fetchMultipleIntraday = tickers => dispatch => {
    if (tickers.every(ticker => Object.keys(cachedIntraday).includes(ticker))) {
        let ownedIntra = {};
        tickers.forEach(ticker => {
            ownedIntra[ticker] = cachedIntraday[ticker];
        });
        return dispatch(receiveMultipleIntraday(ownedIntra));
    } else {
        let missingStocks = tickers.filter(ticker => !Object.keys(cachedIntraday).includes(ticker));
        missingStocks.forEach(ticker => {
            fetchIntraday(ticker);
        })
        fetchMultipleIntraday([...tickers, ...missingStocks]);
    }
    return AssetAPIUtil.fetchMultipleIntraday(tickers).then(multIntraday => {
        debugger
        return dispatch(receiveMultipleIntraday(multIntraday));
    });
}

// export const fetchMultipleIntraday = tickers => dispatch => {
//     return AssetAPIUtil.fetchMultipleIntraday(tickers).then(multIntraday => {
//         debugger
//         return dispatch(receiveMultipleIntraday(multIntraday));
//     })
// }

let cachedRating = {};
export const fetchRating = ticker => dispatch => {
    if (cachedRating[ticker]) {
        return dispatch(receiveRating(cachedRating[ticker], ticker));
    } else {
        return AssetAPIUtil.fetchRating(ticker).then(rating => {
            cachedRating[ticker] = rating;
            return dispatch(receiveRating(rating, ticker));
        });
    }
}
