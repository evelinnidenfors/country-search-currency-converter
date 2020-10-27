import React, { useState, useEffect } from "react";
import "./styles.css";
import CountryInformation from "./countryInformation";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [countryList, setCountryList] = useState([]);

  const switchNameHandler = (country) => {
    setInputValue(country);
  };

  const getCountryList = () => {
    const apiUrl = "https://restcountries.eu/rest/v2/all";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryList(data));
  };

  useEffect(getCountryList, []);
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
        placeholder="Search for a country"
      />
      </div>
      {inputValue.length > 0 && countryList
        .filter((c) => c.name.toLowerCase().includes(inputValue.toLowerCase()) || c.capital.toLowerCase().includes(inputValue.toLowerCase()))
        .map((c) => {
          return (
            <CountryInformation
              key={c.name}
              name={c.name}
              capital={c.capital}
              population={c.population}
              currencies={c.currencies}
              flag={c.flag}
            />
          );
      })}
    </div>
  );
}

export default App;
