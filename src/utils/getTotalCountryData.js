import axios from "./axios";
import dataSum from "./dataSum";
const getData = async (country = "United Kingdom") => {
  const responseData = await axios.get(`/data/country/${country}`);
  const totalSums = dataSum(responseData.data);
  return totalSums;
};

export default getData;
