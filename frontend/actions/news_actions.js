import * as NewsAPIUtil from "../util/news_api_util";

export const RECEIVE_ALL_NEWS = "RECEIVE_ALL_NEWS";
export const RECEIVE_ASSET_NEWS = "RECEIVE_ASSET_NEWS";

export const receiveAllNews = allNews => {
    return {
        type: RECEIVE_ALL_NEWS,
        allNews
    }
}

export const receiveAssetNews = assetNews => {
    return {
        type: RECEIVE_ASSET_NEWS,
        assetNews
    }
}

export const fetchAllNews = () => dispatch => {
    return NewsAPIUtil.fetchAllNews().then(allNews => {
        return dispatch(receiveAllNews(allNews));
    })
}

export const fetchAssetNews = ticker => dispatch => {
    return NewsAPIUtil.fetchAssetNews(ticker).then(assetNews => {
        return dispatch(receiveAssetNews(assetNews));
    })
}