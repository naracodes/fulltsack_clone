
export const fetchAllWatchlistAssets = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/watchlists`
    })
}

export const addAssetToWatchlist = (asset, currentUser) => {
    const assetToAdd = $.ajax({
        method: 'POST',
        url: `/api/watchlists`,
        data: {
            user_id: currentUser.id,
            ticker: asset.ticker,
            asset_name: asset.companyName,
            latest_price: asset.latestPrice,
            prev_close: asset.previousClose,
        }
    })
    return assetToAdd;
}

export const deleteAssetFromWatchlist = (asset, currentUser) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/watchlists/${asset.ticker}`,
        data: {
            user_id: currentUser.id,
            ticker: asset.ticker,
        }
    })
}