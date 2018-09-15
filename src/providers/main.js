import React, { Component } from "react";
export const Context = React.createContext();

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      markers: [],
      center: {
        lat: 30.2672,
        lng: -97.7431
      },
      defaultCenter: {
        lat: 30.2672,
        lng: -97.7431
      },
      zoom: 11,
      searchText: "",
      restaurants: [],
      updateState: state => this.setState(state)
    };
  }
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
