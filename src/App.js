import { useEffect } from "react";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import CountryPicker from "./components/CountryPicker";
import getData from "./utils/getData";
const App = () => {
  useEffect(async () => {
    const data = await getData();
    console.log(data);
  }, []);
  return (
    <div>
      <h1 className="text-center fw-bold my-3"> COVID-19 TRACKER</h1>
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
