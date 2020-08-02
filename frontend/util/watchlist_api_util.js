
export const fetchAllWatchlistAssets = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/watchlists`
    })
}

export const addAssetToWatchlist = (asset, currentUser) => {
    debugger
    const assetToAdd = $.ajax({
        method: 'POST',
        url: `/api/watchlists`,
        data: {
            user_id: currentUser.id,
            ticker: asset.ticker,
            asset_name: asset.companyName,
            latest_price: asset.latestPrice,
        }
    })
    debugger
    return assetToAdd;
}

// export const addAssetToWatchlist = asset => {
//     debugger
//     return $.ajax({
//         method: 'POST',
//         url: `/api/watchlists`,
//         data: { asset }
//     })
// }

export const deleteAssetFromWatchlist = (asset, currentUser) => {
    debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/watchlists/${asset.ticker}`,
        data: {
            user_id: currentUser.id,
            ticker: asset.ticker,
        }
    })
}