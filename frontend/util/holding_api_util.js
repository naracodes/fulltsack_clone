export const fetchHoldings = () => {
    debugger
  return $.ajax({
    method: "GET",
    url: `/api/holdings`,
  });
};
