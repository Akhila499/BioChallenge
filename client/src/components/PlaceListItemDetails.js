import React from "react";
import { Link, useParams } from "react-router-dom";

const PlaceListItemDetails = (props) => {
  const params = useParams();
  const { appState } = props;
  const filterDetails = appState.apiData.filter(
    (ele) => ele.id === params.placeId
  );
  const imgUrl = filterDetails[0].logo_url;

  return (
    <>
      <Link to="/"> Go back to Places</Link>
      <div className="details">
        <div className="details_img">
          <img src={`${imgUrl}`} />
        </div>
        <div className="details_info">
          <ul>
            <li>
              <span>Business:</span> {filterDetails[0].name}
            </li>
            <li>
              <span>Address:</span>
              {filterDetails[0].address}
            </li>
            <li>
              <span>Website:</span>
              {filterDetails[0].website_url}
            </li>
            <li>
              <span>Hours:</span>
              {Object.keys(filterDetails[0].hours).map((key, i) => (
                <p key={i}>
                  <span>{key}:</span>
                  <span>{filterDetails[0].hours[key]}</span>
                </p>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PlaceListItemDetails;
