import React, { PropTypes } from 'react';
import MapGL from 'react-map-gl';
import isClient from '../utils/isClient';

const ReactMap = ({ width, height, longitude, latitude, zoom, minZoom, maxZoom, mapboxStyle, mapboxToken}) => (
    <div>
      {isClient &&
        <MapGL width={width} height={height} latitude={latitude} longitude={longitude}
          zoom={zoom} minZoom={minZoom} maxZoom={maxZoom} 
          mapStyle={mapboxStyle} mapboxApiAccessToken={mapboxToken} />
        }
    </div>
  );

ReactMap.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  zoom: PropTypes.number,
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  mapboxStyle: PropTypes.string,
  mapboxToken: PropTypes.string.isRequired,
};

ReactMap.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  latitude: 45.5237732,
  longitude: -122.6622935,
  zoom: 12,
  minZoom: 10,
  maxZoom: 16,
  mapboxStyle: "mapbox://styles/themendozaline/cjg6296ub04ot2sqv9izku3qq",
};

ReactMap.displayName = "ReactMap";

export default ReactMap;