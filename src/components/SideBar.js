import React, { Component } from "react";
import Header from "./Header";
import List from "./List";

export default class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        SideBar
        <List />
      </React.Fragment>
    );
  }
}