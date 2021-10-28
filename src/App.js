import React, { useState, useEffect } from "react";
import "./styles.css";
import CountryInformation from "./countryInformation";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);

  const switchNameHandler = (country) => {
    setInputValue(country);
  };

  const getCurrencyList = () => {
  const currencyEndpoint =
      "http://data.fixer.io/api/latest?access_key=" +
      process.env.REACT_APP_CURRENCY_API_KEY +
      "&base=EUR"
      fetch(currencyEndpoint)
      .then((response) => response.json())
      .then((data) => setCurrencyList(data));
}
  const getCountryList = () => {
    const apiUrl = "https://restcountries.com/v2/all";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryList(data));
  };

  useEffect(getCountryList, []);
  useEffect(getCurrencyList, []);
  useEffect(() => console.log(process.env.REACT_APP_CONSOLE_LOG), []);

  return (
    <div className="App">
      <div className="header">
      <h1>
        Countries of the world {" "}
        <span role="img" aria-label="globe">
          🌍
        </span>
      </h1>
      <input
        onChange={(event) => switchNameHandler(event.target.value)}
        placeholder="Search for a country/capital"
      />
      </div>
      {inputValue.length > 0 && countryList
        .filter((c) => c.name.toLowerCase().includes(inputValue.toLowerCase()) || (c.capital != null && c.capital.toLowerCase().includes(inputValue.toLowerCase())))
        .map((c) => {
          return (
            <CountryInformation
              key={c.name}
              name={c.name}
              capital={c.capital}
              population={c.population}
              currencies={c.currencies}
              flag={c.flag}
              currencyList={currencyList}
            />
          );
      })}
    </div>
  );
}

export default App;
