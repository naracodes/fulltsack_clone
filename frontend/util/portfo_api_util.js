export const fetchPortfoData = range => {
  return $.ajax({
    method: "GET",
    url: `/api/portfo_data/${range}`,
  });
};
