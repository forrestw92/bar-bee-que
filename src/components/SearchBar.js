import React, { Component } from "react";
export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form id="filterForm">
        <input
          type="text"
          role="search"
          id="filter"
          placeholder="Franklin's"
          aria-label="Filter Results"
        />
      </form>
    );
  }
}
