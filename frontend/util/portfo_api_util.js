export const fetchPortfoData = range => {
  debugger
  return $.ajax({
    method: "GET",
    url: `/api/portfo_data/${range}`,
  });
};
