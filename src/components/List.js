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
  render() {
    return (
      <div className="businessList">
        {this.props.restaurants &&
          this.props.restaurants.map((restaurant, index) => (
            <ListItem key={index} {...restaurant} />
          ))}
      </div>
    );
  }
}
List.propTypes = {
  restaurants: PropTypes.array
};
