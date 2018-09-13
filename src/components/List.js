import React, { Component } from "react";
import ListItem from "./ListItem";
export default class List extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <ListItem />
        Business List
      </React.Fragment>
    );
  }
}
