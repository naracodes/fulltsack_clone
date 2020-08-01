
export const fetchAllWatchlistAssets = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/watchlist`
    })
}

export const addAssetToWatchlist = asset => {
    return $.ajax({
        method: 'POST',
        url: `/api/watchlist/`,
        data: { asset }
    })
}

export const deleteAssetFromWatchlist = () => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/watchlist`,
    })
}