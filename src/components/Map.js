import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === "wildfires") {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometry[0].coordinates[1]}
          lng={ev.geometry[0].coordinates[0]}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
