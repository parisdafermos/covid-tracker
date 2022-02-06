import axios from "./axios";

const getData = (country = "United Kingdom") => {
  return axios.get(`/data/country/${country}`);
};

export default getData;
