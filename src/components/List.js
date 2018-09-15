import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
export default class List extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(this.props.restaurants);
  }
  handleFocus = (e, id) => {
    const closeMarkers = this.props.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    const openMarker = this.props.markers.find(
      marker => marker.name === e.props.name
    );
    openMarker.isOpen = true;
    this.props.updateState({
      markers: Object.assign(closeMarkers, openMarker),
      center: openMarker.position,
      zoom: 15
    });
  };
  render() {
    return (
      <ul className="businessList" tabIndex={0}>
        {this.props.restaurants &&
          this.props.restaurants
            .filter(restaurant =>
              restaurant.name.toLowerCase().includes(this.props.searchText)
            )
            .map((restaurant, index) => (
              <ListItem
                key={index}
                index={index}
                {...restaurant}
                handleFocus={this.handleFocus}
              />
            ))}
      </ul>
    );
  }
}
List.propTypes = {
  restaurants: PropTypes.array,
  searchText: PropTypes.string,
  markers: PropTypes.array
};
