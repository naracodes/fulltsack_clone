export const fetchPortfoData = () => {
    // debugger
  return $.ajax({
    method: "GET",
    url: `/api/portfo_data`,
  });
};
