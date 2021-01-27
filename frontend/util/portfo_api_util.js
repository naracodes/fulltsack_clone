export const fetchPortfoData = () => {
  return $.ajax({
    method: "GET",
    url: `/api/portfo_data`,
  });
};
