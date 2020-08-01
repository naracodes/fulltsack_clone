
export const addAssetToWatchlist = asset => {
    return $.ajax({
        method: 'POST',
        url: `/api/watchlists/`,
        data: { asset }
    })
}

export const deleteAssetFromWatchlist = () => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/watchlists`,
    })
}