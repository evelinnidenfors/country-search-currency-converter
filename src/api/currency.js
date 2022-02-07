export const getCurrencies = () => {
  const currencyEndpoint =
    "http://data.fixer.io/api/latest?access_key=" +
    process.env.REACT_APP_CURRENCY_API_KEY +
    "&base=EUR";
  return fetch(currencyEndpoint).then((response) => response.json());
};
