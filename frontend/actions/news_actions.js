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

let cachedAssetNews;
export const fetchAssetNews = ticker => dispatch => {
    if (cachedAssetNews.length === 3) {
        return dispatch(receiveAssetNews(cachedAssetNews))
    } else {
        return NewsAPIUtil.fetchAssetNews(ticker).then(assetNews => {
            cachedAssetNews = assetNews;
            return dispatch(receiveAssetNews(assetNews));
        })
    }
}