import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import BusinessDetails from "../BusinessDetails";

export default class List extends Component {
  handleKeyInput = (info, e) => {
    if (e.key === "Enter") {
      this.props.updateMarker(info.props.name, true, true);
      this.props.updateState({
        singleRestaurant: info.props.alias,
        singleDetails: true
      });
    }
  };
  handleClick = info => {
    console.log(info.props.alias);
    this.props.updateState({
      singleRestaurant: info.props.alias,
      singleDetails: true
    });
  };
  handleFocus = e => {
    this.props.hideAllMarkers();
    this.props.updateMarker(e.props.name, true, true);
    this.props.centerMapOnMarker(e.props.name);
    this.props.updateState({
      zoom: 15
    });
  };
  render() {
    return (
      <ul
        className={
          this.props.singleDetails
            ? "businessList singleBusiness"
            : "businessList"
        }
        tabIndex={0}
      >
        {this.props.restaurants &&
          !this.props.singleDetails &&
          this.props.restaurants
            .filter(restaurant =>
              restaurant.name.toLowerCase().includes(this.props.searchText)
            )
            .map((restaurant, index) => (
              <ListItem
                key={index}
                index={index}
                {...restaurant}
                handleClick={this.handleClick}
                handleFocus={this.handleFocus}
                handleKeyInput={this.handleKeyInput}
              />
            ))}
        {this.props.singleDetails && <BusinessDetails {...this.props} />}
      </ul>
    );
  }
}
List.propTypes = {
  restaurants: PropTypes.array,
  restaurantDetails: PropTypes.object,
  searchText: PropTypes.string,
  markers: PropTypes.array,
  updateState: PropTypes.func.isRequired,
  hideAllMarkers: PropTypes.func.isRequired,
  centerMapOnMarker: PropTypes.func.isRequired,
  updateMarker: PropTypes.func.isRequired,
  defaultCenter: PropTypes.object,
  singleDetails: PropTypes.bool
};
