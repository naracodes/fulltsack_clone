export const fetchPortfolioCashBalance = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/portfolios`
    })
}

export const addTransaction = (order, currentUser) => {
    debugger
    const assetToAdd = $.ajax({
      method: "POST",
      url: `/api/portfolios`,
      data: {
        user_id: currentUser.id,
        ticker: "",
        transaction_type: "",
        cost_per_share: "",
        transaction_amount: 0,
      },
    });
    debugger
    return assetToAdd;
}