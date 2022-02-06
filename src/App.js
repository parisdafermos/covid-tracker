import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";
import getTotalCountryData from "./utils/getTotalCountryData";
import getCountries from "./utils/getCountries";
const App = () => {
  const [countryData, setCountryData] = useState({
    confirmed: 0,
    deaths: 0,
    recovered: 0,
  });
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");
  useEffect(async () => {
    const countryData = await getTotalCountryData(selectedCountry);
    setCountryData(countryData);
    const allCountries = await getCountries();
    console.log(allCountries);
    setAllCountries(allCountries);
  }, [selectedCountry]);

  return (
    <div>
      <h1 className="text-center fw-bold my-3"> COVID-19 TRACKER</h1>
      <div>
        <Cards countryData={countryData} />
        <CountryPicker
          allCountries={allCountries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <Chart countryData={countryData} />
      </div>
    </div>
  );
};

export default App;
