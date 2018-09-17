import React, { Component } from "react";
import YelpApi from "../api";
export const Context = React.createContext();

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      markers: [],
      center: {
        lat: 30.2672,
        lng: -97.7431
      },
      defaultCenter: {
        lat: 30.2672,
        lng: -97.7431
      },
      zoom: 11,
      searchText: "",
      singleDetails: false,
      singleRestaurant: "",
      restaurantDetails: {},
      restaurants: [],

      hideAllMarkers: () => {
        const newMarkers = this.state.markers.map(marker => {
          marker.visible = false;
          marker.isOpen = false;
          return marker;
        });
        this.setState({
          markers: Object.assign(this.state.markers, newMarkers)
        });
      },
      updateMarker: (name, visible) => {
        const marker = this.state.markers.find(marker => marker.name === name);
        if (marker) {
          marker.visible = visible;
          this.setState({ markers: Object.assign(this.state.markers, marker) });
        }
      },
      centerMapOnMarker: name => {
        const marker = this.state.markers.find(marker => marker.name === name);
        if (marker) {
          this.setState({ center: marker.position });
        }
      },
      lookup: async () => {
        try {
          const restaurantDetails = await YelpApi.lookup(
            this.state.singleRestaurant
          );
          console.log(restaurantDetails);
          this.setState({
            restaurantDetails
          });
        } catch (error) {
          console.log(error);
        }
      },
      updateState: state => this.setState(state)
    };
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
