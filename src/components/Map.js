import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} defaultCenter={props.center}>
      {props.markers &&
        props.markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
    </GoogleMap>
  ))
);
export default class Map extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChoZfDuBpt0PFzB2jhpitmUdOrSE76HRQ&v=3.exp"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={this.props.center}
          markers={this.props.markers}
        />
      </React.Fragment>
    );
  }
}
Map.propTypes = {
  center: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired
};
