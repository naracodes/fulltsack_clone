import * as AssetAPIUtil from '../util/asset_api_util';

export const RECEIVE_ALL_ASSETS = "RECEIVE_ALL_ASSETS"
export const RECEIVE_ASSETS = "RECEIVE_ASSETS" //GET QUOTES FOR MULTIPLE TICKERS
export const RECEIVE_ASSET = "RECEIVE_ASSET"
export const RECEIVE_ASSET_STATS = "RECEIVE_ASSET_STATS"
export const RECEIVE_ASSET_INTRADAY = "RECEIVE_ASSET_INTRADAY";
export const RECEIVE_PRICE = "RECEIVE_PRICE";
export const RECEIVE_COMPANY_INFO = "RECEIVE_COMPANY_INFO";
export const RECEIVE_NEWS = "RECEIVE_NEWS";
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

export const receiveNews = (news, ticker) => {
    return {
        type: RECEIVE_ASSET_INTRADAY,
        news,
        ticker,
    }
}

// export const receiveQuoteAndNews = (quoteAndNews) => {
//     debugger
//     return {
//         type: RECEIVE_ASSET_INTRADAY,
//         quoteAndNews,
//     }
// }

export const receivePrice = assetPrice => {
    // debugger
    return {
        type: RECEIVE_PRICE,
        assetPrice
    }
}

export const receiveCompanyInfo = company => {
    debugger
    return {
        type: RECEIVE_COMPANY_INFO,
        company,
    }
}

export const clearPrice = () => {
    // debugger
    return {
        type: CLEAR_PRICE,
    }
}

export const clearAsset = () => {
    // debugger
    return {
        type: CLEAR_ASSET,
    }
}

// export const fetchStocks = () => {

// }

export const fetchAssets = () => dispatch => {
    // debugger
    return AssetAPIUtil.fetchAssets().then(assets => {
        // debugger
        return dispatch(receiveAllAssets(assets))
    })
}

export const fetchAsset = ticker => dispatch => {
    // debugger
    return AssetAPIUtil.fetchAsset(ticker).then(asset => {
        // debugger
        return dispatch(receiveAsset(asset))
    })
}

export const fetchPrice = ticker => dispatch => {
    // debugger
    return AssetAPIUtil.fetchPrice(ticker).then(assetPrice => {
        // debugger
        return dispatch(receivePrice(assetPrice));
    })
}

export const fetchCompanyInfo = ticker => dispatch => {
    debugger
    return AssetAPIUtil.fetchCompanyInfo(ticker).then(company => {
        debugger
        return dispatch(receiveCompanyInfo(company));
    })
}

export const fetchIntraday = ticker => dispatch => {
    debugger
    return AssetAPIUtil.fetchIntraday(ticker).then(assetIntraday => {
        debugger
        return dispatch(receiveAssetIntraday(assetIntraday, ticker));
    })
}

// export const fetchQuoteAndNews = ticker => dispatch => {
//     debugger
//     return AssetAPIUtil.fetchQuoteAndNew(ticker).then((quoteAndNews) => {
//         debugger
//         return dispatch(receiveQuoteAndNews(quoteAndNews));
//     })
// }