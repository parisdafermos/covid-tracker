import React from "react";
import "./Cards.css";
import CountUp from "react-countup";
export default (props) => {
  const countryData = props.countryData;
  return (
    <div className="d-flex justify-content-center ml-5">
      <div className="card-div-infected mx-3 text-center red-font">
        <p className="">Infected</p>
        <CountUp end={countryData.confirmed} duration={2}></CountUp>
      </div>
      <div className="card-div-deaths text-center blue-font">
        <p>Deaths</p>
        <CountUp end={countryData.deaths} duration={2}></CountUp>
      </div>
    </div>
  );
};
