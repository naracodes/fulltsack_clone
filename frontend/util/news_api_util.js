export const fetchAllNews = () => {
    return $.ajax({
      method: "GET",
      url: `http://newsapi.org/v2/top-headlines?language=en&q=stock&from=2020-07-31&to=today&sortBy=popularity&apiKey=e6c80b74b664420d8dd71e77555fa65b`,
    });
}

export const fetchAssetNews = (ticker) => {
    return $.ajax({
      method: "GET",
      // url: `http://newsapi.org/v2/top-headlines?language=en&q=${companyName}&from=2020-08-15&to=today&sortBy=popularity&apiKey=e6c80b74b664420d8dd71e77555fa65b`,
      // url: `https://sandbox.iexapis.com/stable/stock/${ticker}/news/last/3?token=Tpk_9cc6c16a40494338943d728d111e9998
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/3?token=pk_9bae36c8264042f68549a11dc83620ac`,
    });
};