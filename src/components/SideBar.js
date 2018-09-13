import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import SearchBar from "./SearchBar"
export default class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="sideBar">
        <Header />
        <SearchBar/>
        SideBar
        <List />
      </div>
    );
  }
}
