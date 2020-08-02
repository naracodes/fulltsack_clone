import * as WatchlistAPIUtil from '../util/watchlist_api_util';

export const RECEIVE_WATCHLIST_ASSETS = "RECEIVE_WATCHLIST_ASSETS";
export const RECEIVE_WATCHLIST_ASSET = "RECEIVE_WATCHLIST_ASSET";
export const REMOVE_WATCHLIST_ASSET = "REMOVE_WATCHLIST_ASSET";

export const receiveWatchlistAssets = (assets) => {
    debugger
    return {
        type: RECEIVE_WATCHLIST_ASSETS,
        assets,
    }
}

export const receiveWatchlistAsset = asset => {
    debugger
    return {
        type: RECEIVE_WATCHLIST_ASSET,
        asset,
    }
}

<<<<<<< HEAD
export const deleteAssetFromWatchlist = () => {
=======
export const removeWatchlistAsset = () => {
    debugger
>>>>>>> apifetch
    return {
        type: REMOVE_WATCHLIST_ASSET,
    }
}

//thunk action creators

export const fetchAllWatchlistAssets = () => dispatch => {
    return WatchlistAPIUtil.fetchAllWatchlistAssets().then(assets => {
        return dispatch(receiveWatchlistAssets(assets));
    })
}

export const addAssetToWatchlist = (asset, currentUser) => dispatch => {
    debugger
<<<<<<< HEAD
    return WatchlistAPIUtil.addAssetToWatchlist(asset, currentUser).then(asset => {
        debugger
        return dispatch(receiveWatchlistAsset(asset));
    })
}

// export const deleteWatchlistAsset = () => dispatch => {
//     return WatchlistAPIUtil.deleteAssetFromWatchlist().then(() => {
//         return dispatch(removeWatchlistAsset());
//     })
// }
=======
    return WatchlistAPIUtil.addAssetToWatchlist(asset, currentUser).then(assets => {
        debugger
        return dispatch(receiveWatchlistAssets(assets));
    })
}

export const deleteAssetFromWatchlist = (asset, currentUser) => dispatch => {
    debugger
    return WatchlistAPIUtil.deleteAssetFromWatchlist(asset, currentUser).then(response => {
        debugger
        return dispatch(removeWatchlistAsset());
    })
}
>>>>>>> apifetch
