export const fetchPortfolioCashBalance = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/portfolios`
    })
}

// export const addTransaction = (asset, currentUser) => {
//     debugger
//     const assetToAdd = $.ajax({
//         method: 'POST',
//         url: `/api/watchlists`,
//         data: {
//             user_id: currentUser.id,
//             ticker: asset.ticker,
//             asset_name: asset.companyName,
//             latest_price: asset.latestPrice,
//             // asset_id: asset.id,
//         }
//     })
//     debugger
//     return assetToAdd;
// }