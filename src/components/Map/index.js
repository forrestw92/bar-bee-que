/*global google*/
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
    <GoogleMap
      zoom={props.zoom}
      defaultCenter={props.center}
      ref={map => map && map.panTo(props.center)}
    >
      {props.markers &&
        props.markers
          .filter(marker => marker.visible === true)
          .map((marker, index) => {
            return (
              <Marker
                key={index}
                name={marker.name}
                position={marker.position}
                onClick={() => props.clickHandler(marker)}
                animation={
                  props.markers.filter(marker => marker.visible === true)
                    .length === 1
                    ? google.maps.Animation.BOUNCE
                    : google.maps.Animation.DROP
                }
              />
            );
          })}
    </GoogleMap>
  ))
);
export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }
  clickHandler = clickedMarker => {
    this.props.hideAllMarkers();
    this.props.updateMarker(clickedMarker.name, true);
    this.props.centerMapOnMarker(clickedMarker.name);
    this.props.updateState({
      zoom: 15,
      singleDetails: true,
      singleRestaurant: clickedMarker.alias
    });
  };
  componentDidMount() {
    window.gm_authFailure = () => {
      this.setState({ error: true });
    };
  }
  render() {
    return (
      <div className="mapContainer">
        {!this.state.error && (
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChoZfDuBpt0PFzB2jhpitmUdOrSE76HRQ&v=3.exp"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={this.props.center}
            markers={this.props.markers}
            clickHandler={this.clickHandler}
            zoom={this.props.zoom}
            updateState={this.props.updateState}
            defaultCenter={this.props.defaultCenter}
          />
        )}
        <h1 style={{ textAlign: "center" }}>Error Loading Google Maps</h1>
      </div>
    );
  }
}
Index.propTypes = {
  hideAllMarkers: PropTypes.func.isRequired,
  updateMarker: PropTypes.func.isRequired,
  centerMapOnMarker: PropTypes.func.isRequired,
  center: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired,
  updateState: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired,
  defaultCenter: PropTypes.object.isRequired
};
