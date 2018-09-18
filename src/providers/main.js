import React, { Component } from "react";
export const Context = React.createContext();

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      menuOpened: true,
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
      restaurants: [],
      openAllMarkers: () => {
        const newMarkers = this.state.markers
          .filter(marker =>
            marker.name
              .toLowerCase()
              .includes(this.state.searchText.toLowerCase())
          )
          .map(marker => {
            marker.visible = true;
            return marker;
          });
        this.setState({
          markers: Object.assign(this.state.markers, newMarkers)
        });
      },
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
