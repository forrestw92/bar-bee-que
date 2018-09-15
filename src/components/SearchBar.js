import React, { Component } from "react";
import PropTypes from "prop-types";
export default class SearchBar extends Component {
  constructor() {
    super();
  }

  handleInput = e => {
    const searchText = e.target.value.toLowerCase()

    let filteredMarkers = this.props.markers
      .filter(
        marker =>
          !marker.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .map(marker => (marker.visible = false));
    let unfilteredMarkers = this.props.markers
      .filter(marker =>
        marker.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .map(marker => (marker.visible = true));
    this.props.updateState({
      searchText,
      markers: Object.assign(
        this.props.markers,
        Object.assign({ filteredMarkers }, { unfilteredMarkers })
      )
    });
  };
  render() {
    return (
      <form id="filterForm">
        <input
          type="text"
          role="search"
          id="filter"
          placeholder="Franklin's"
          aria-label="Filter Results"
          onChange={this.handleInput}
        />
      </form>
    );
  }
}
SearchBar.propTypes = {
  markers: PropTypes.array,
  restaurants: PropTypes.array,
  updateState: PropTypes.func.isRequired
};
