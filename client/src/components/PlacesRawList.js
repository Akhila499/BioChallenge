import React from "react";
import PlacesList from "./PlacesList";

const PlacesRawList = (props) => {
  const { appState } = props;
  console.log("checkkek", appState);

  const placesData = appState.apiData.map((place) => (
    <PlacesList key={place.id} place={place} />
  ));

  return <div>{placesData}</div>;
};

export default PlacesRawList;
