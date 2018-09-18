import React, { Component } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import BusinessDetails from "../BusinessDetails";

export default class List extends Component {
  loadMarker = (info, loadInfo) => {
    this.props.hideAllMarkers();
    this.props.updateMarker(info.props.name, true, true);
    this.props.centerMapOnMarker(info.props.name);
    if (loadInfo) {
      this.props.updateState({
        zoom: 15,
        singleDetails: true,
        singleRestaurant: info.props.alias
      });
    } else {
      this.props.updateState({
        zoom: 15
      });
    }
  };
  handleClick = info => {
    this.loadMarker(info, true);
  };
  handleFocus = info => {
    this.loadMarker(info);
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
