import React from "react";
import CountryInformation from "./countryInformation";

export const CountryList = ({ searchValue, countryList, currencyList }) => {
  return (
    <div>
      {countryList
        .filter(
          (c) =>
            c.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            (c.capital != null &&
              c.capital.toLowerCase().includes(searchValue.toLowerCase()))
        )
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
};
