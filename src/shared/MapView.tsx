import React from "react";
import LocationMapView from "../shared/LocationMapView/LocationMapView";
const MapView = () => {
  return (
    <div>
      <LocationMapView lat={22.5726} lng={88.3639} />
    </div>
  );
};

export default MapView;
