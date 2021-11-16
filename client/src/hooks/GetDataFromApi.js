import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const GetDataFromApi = () => {
  const [appState, setAppState] = useState({
    apiData: [],
    isFetching: false,
  });

  useEffect(() => {
    fetchData();
    return () => {
      setAppState({}); // This worked for me
    };
  }, []);

  const fetchData = async () => {
    try {
      setAppState({ apiData: appState.apiData, isFetching: true });
      await axios
        .get(`https://6025865136244d001797c552.mockapi.io/api/v1/places`)
        .then((res) => {
          setAppState({ apiData: res.data, isFetching: false });
          console.log("res", res, res.data);
        });
    } catch (exception) {
      console.log("error occurred", exception);
      setAppState({ wheatherData: appState.apiData, isFetching: false });
    }
  };

  return { appState };
};

export default GetDataFromApi;
