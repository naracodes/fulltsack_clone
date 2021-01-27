export const fetchHoldings = () => {
  return $.ajax({
    method: "GET",
    url: `/api/holdings`,
  });
};
