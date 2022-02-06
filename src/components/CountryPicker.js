import React from "react";

export default ({ allCountries, selectedCountry, setSelectedCountry }) => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <label htmlFor="select-country" className="me-2">
        {" "}
        Choose a Country
      </label>
      <select
        id="select-country"
        value={selectedCountry}
        onChange={(event) => setSelectedCountry(event.target.value)}
      >
        {allCountries.map((country) => {
          return <option value={country}>{country}</option>;
        })}
      </select>
    </div>
  );
};
