import React from "react";
import Currency from "./currency";

const CountryInformation = (props) => {
  return (
    <div className="countryinformation">
      <img className="flag" alt="flag" src={props.flag}/>
      <p><b>Country Name</b> {props.name}</p>
      <p><b>Capital</b> {props.capital}</p>
      <p><b>Population</b> {new Intl.NumberFormat().format(props.population)}</p>
      {props.currencies != null && props.currencies.map((currency) => {
        return currency.code !== null && currency.code !== "(none)" && (
          <div key={currency.code}>
            <p><b>Currency</b> {" " + currency.name}</p>
            <Currency currency={currency.code} currencyList={props.currencyList}/>
          </div>
        )
      }
      )}
      <hr/>
    </div>
  );
};

export default CountryInformation;
