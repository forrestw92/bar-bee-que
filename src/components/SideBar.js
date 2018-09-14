import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import List from "./List";
import SearchBar from "./SearchBar";
import YelpApi from "../api";
export default class SideBar extends Component {
  constructor() {
    super();
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
        return { lat: latitude, lng: longitude };
      });
      this.props.updateState({
        restaurants: restaurants.businesses,
        center: { lat: latitude, lng: longitude },
        markers
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="sideBar">
        <Header />
        <SearchBar />
        <List restaurants={this.props.restaurants} />
      </div>
    );
  }
}
SideBar.propTypes = {
  updateState: PropTypes.func.isRequired,
  restaurants: PropTypes.array
};
