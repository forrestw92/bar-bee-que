import React, { Component } from "react";
export const Context = React.createContext();

export default class Provider extends Component {
  constructor() {
    super();
    this.state = {};
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
