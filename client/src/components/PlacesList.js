import React from "react";
import { useNavigate } from "react-router-dom";
const PlacesList = (props) => {
  const { place } = props;

  console.log("listssdf", place);
  return (
    <>
      <p>
        {place.id} |<a href="{place.id}">{place.name}</a>| {place.website_url} |
        {place.address}
      </p>
    </>
  );
};

export default PlacesList;
