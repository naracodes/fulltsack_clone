import * as AssetAPIUtil from '../util/asset_api_util';

export const RECEIVE_ALL_ASSETS = "RECEIVE_ALL_ASSETS"
export const RECEIVE_ASSETS = "RECEIVE_ASSETS" //GET QUOTES FOR MULTIPLE TICKERS
export const RECEIVE_ASSET = "RECEIVE_ASSET"
export const RECEIVE_ASSET_STATS = "RECEIVE_ASSET_STATS"
export const RECEIVE_ASSET_INTRADAY = "RECEIVE_ASSET_INTRADAY";
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

export const fetchAsset = ticker => dispatch => {
    return AssetAPIUtil.fetchAsset(ticker).then(asset => {
        return dispatch(receiveAsset(asset))
    })
}

export const fetchCompanyInfo = ticker => dispatch => {
    return AssetAPIUtil.fetchCompanyInfo(ticker).then(company => {
        return dispatch(receiveCompanyInfo(company));
    })
}

export const fetchIntraday = ticker => dispatch => {
    return AssetAPIUtil.fetchIntraday(ticker).then(assetIntraday => {
        return dispatch(receiveAssetIntraday(assetIntraday, ticker));
    })
}

export const fetchRating = ticker => dispatch => {
    return AssetAPIUtil.fetchRating(ticker).then(rating => {
        return dispatch(receiveRating(rating, ticker));
    })
}
