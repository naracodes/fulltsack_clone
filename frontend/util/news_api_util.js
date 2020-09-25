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
      url: `https://sandbox.iexapis.com/stable/stock/${ticker}/news/last/3?token=Tsk_498db2929da24682a573da9403ff8a2a`,
    });
};