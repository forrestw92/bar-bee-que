import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import List from "./BusinessList/List";
import SearchBar from "./SearchBar";
import YelpApi from "../api";
export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  async componentDidMount() {
    try {
      const restaurants = await YelpApi.search(
        {},
        {
          options: {
            categories: "bbq",
            sort_by: "review_count",
            location: "Austin Tx"
          }
        }
      );
      const { longitude, latitude } = restaurants.region.center;
      const markers = restaurants.businesses.map(business => {
        const { longitude, latitude } = business.coordinates;
        return {
          position: { lat: latitude, lng: longitude },
          name: business.name,
          alias: business.alias,
          visible: true,
          isOpen: false
        };
      });
      this.props.updateState({
        restaurants: restaurants.businesses,
        center: { lat: latitude, lng: longitude },
        markers
      });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div className="sideBar">
        <Header {...this.props} />
        {!this.props.singleDetails && <SearchBar {...this.props} />}
        {!this.state.error && <List {...this.props} />}
        {this.state.error && <h1>Error! Please Reload Page.</h1>}
      </div>
    );
  }
}
SideBar.propTypes = {
  updateState: PropTypes.func.isRequired,
  restaurants: PropTypes.array,
  singleDetails: PropTypes.bool.isRequired,
  singleRestaurant: PropTypes.string.isRequired
};
