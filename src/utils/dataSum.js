import React from "react";

export default (data) => {
  const reducer = (previousValue, currentValue) => {
    return {
      confirmed:
        previousValue.confirmed + parseInt(currentValue.Confirmed || 0),
      deaths: previousValue.deaths + parseInt(currentValue.Deaths || 0),
      recovered:
        previousValue.recovered + parseInt(currentValue.Recovered || 0),
    };
  };
  const initial = {
    confirmed: 0,
    deaths: 0,
    recovered: 0,
  };
  return data.reduce(reducer, initial);
  //should return totals Confirmed, Deaths and Recovered
};
