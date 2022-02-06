import { useEffect } from "react";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";
import getTotalCountryData from "./utils/getTotalCountryData";
const App = () => {
  const [countryData, setCountryData] = useState(null);
  useEffect(async () => {
    const countryData = await getTotalCountryData();
    setCountryData(countryData);
  }, []);

  return (
    <div>
      <h1 className="text-center fw-bold my-3"> COVID-19 TRACKER</h1>
      <Cards countryData={countryData} />
      <CountryPicker />
      <Chart countryData={countryData} />
    </div>
  );
};

export default App;
