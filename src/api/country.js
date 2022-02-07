export const getCountries = () => {
  const apiUrl = "https://restcountries.com/v2/all";
  return fetch(apiUrl).then((response) => response.json());
};
