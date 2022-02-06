import React from "react";
import axios from "./axios";
export default async () => {
  const responseData = await axios.get("/data/meta/countries");

  return responseData.data;
};
