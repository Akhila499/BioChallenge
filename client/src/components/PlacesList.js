import React from "react";
import { Link } from "react-router-dom";

const PlacesList = (props) => {
  const { place } = props;
  const placeId = place.id;

  return (
    <>
      {/* displaying the list of places */}
      <p>
        {place.id} |<Link to={`/places/${placeId}`}>{place.name}</Link> |
        {place.website_url} |{place.address}
      </p>
    </>
  );
};

export default PlacesList;
