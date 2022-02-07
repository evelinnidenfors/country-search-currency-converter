import React, { useState, useEffect } from "react";
import "./styles.css";
import { getCountries } from "./api/country";
import { getCurrencies } from "./api/currency";
import { CountryList } from "./components/countryList";
import { Header } from './components/header';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);

  const switchNameHandler = (country) => {
    setInputValue(country);
  };

  const getCurrencyList = () => {
    getCurrencies().then((data) => setCurrencyList(data));
  };

  const getCountryList = () => {
    getCountries().then((data) => setCountryList(data));
  };

  useEffect(getCountryList, []);
  useEffect(getCurrencyList, []);
  useEffect(() => console.log(process.env.REACT_APP_CONSOLE_LOG), []);

  return (
    <div className="App">
      <Header inputNameHandler={switchNameHandler} />
      {inputValue.length > 0 && <CountryList searchValue={inputValue} countryList={countryList} currencyList={currencyList} /> }
    </div>
  );
}

export default App;
