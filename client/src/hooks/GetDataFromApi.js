import axios from "axios";
import { useState, useEffect } from "react";

export const GetDataFromApi = () => {
  const [appState, setAppState] = useState({
    apiData: [],
    isFetching: false,
  });

  useEffect(() => {
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
    fetchData();
  }, []);

  return {
    appState,
  };
};
