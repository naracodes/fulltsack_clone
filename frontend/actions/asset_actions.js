import * as AssetAPIUtil from '../util/asset_api_util';

export const RECEIVE_ALL_ASSETS = "RECEIVE_ALL_ASSETS"
export const RECEIVE_ASSETS = "RECEIVE_ASSETS" //GET QUOTES FOR MULTIPLE TICKERS
export const RECEIVE_ASSET = "RECEIVE_ASSET"
export const RECEIVE_ASSET_STATS = "RECEIVE_ASSET_STATS"
export const RECEIVE_ASSET_INTRADAY = "RECEIVE_ASSET_INTRADAY";
export const RECEIVE_PRICE = "RECEIVE_PRICE";
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

export const receivePrice = assetPrice => {
    debugger
    return {
        type: RECEIVE_PRICE,
        assetPrice
    }
}

export const clearPrice = () => {
    debugger
    return {
        type: CLEAR_PRICE,
    }
}

export const clearAsset = () => {
    debugger
    return {
        type: CLEAR_ASSET,
    }
}

// export const fetchStocks = () => {

// }

export const fetchAssets = () => dispatch => {
    debugger
    return AssetAPIUtil.fetchAssets().then(assets => {
        debugger
        return dispatch(receiveAllAssets(assets))
    })
}

export const fetchAsset = ticker => dispatch => {
    debugger
    return AssetAPIUtil.fetchAsset(ticker).then(asset => {
        debugger
        return dispatch(receiveAsset(asset))
    })
}

export const fetchPrice = ticker => dispatch => {
    debugger
    return AssetAPIUtil.fetchPrice(ticker).then(assetPrice => {
        debugger
        return dispatch(receivePrice(assetPrice));
    })
}