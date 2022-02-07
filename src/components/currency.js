import React, { useState, useEffect } from "react";

const Currency = (props) => {
  const [amountValue, setAmountValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState(0);
  const convertAmount = () => {
        //converting from Euro to SEK as free version api response is limited to Euro
        const euroSekConversion = (amountValue / props.sekRate);
        //converting from SEK to searched currency
        const calculatedValue = (euroSekConversion * props.currencyRate);
        //limiting numbers after decimal point
        setConvertedValue(calculatedValue.toFixed(2))
    //   });
  };
  const switchAmountHandler = (amount) => {
    setAmountValue(amount);
  }

  useEffect(convertAmount, [amountValue]);

  // formatting of output and dislpaying in a readable way, e.g. 1000000 shows as 1,000,000
  const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number);
  }

  return (
    <div className="Currency">
      <input
        onChange={(event) => switchAmountHandler(event.target.value)}
        placeholder="Convert from SEK"
        type="number"
      />
      <p><span>{formatNumber(amountValue)} SEK</span> = <span>{formatNumber(convertedValue)} {props.currency}</span></p>
    </div>
  );
};

export default Currency;
