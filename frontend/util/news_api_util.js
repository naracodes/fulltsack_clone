export const fetchAllNews = () => {
    return $.ajax({
      method: "GET",
      url: `http://newsapi.org/v2/top-headlines?language=en&q=stock&from=2020-07-31&to=today&sortBy=popularity&apiKey=e6c80b74b664420d8dd71e77555fa65b`,
    });
}

export const fetchAssetNews = (companyName) => {
  return $.ajax({
    method: "GET",
    url: `http://newsapi.org/v2/top-headlines?language=en&q=${companyName}&from=2020-08-01&to=today&sortBy=popularity&apiKey=e6c80b74b664420d8dd71e77555fa65b`,
  });
};