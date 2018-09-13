import React, { Component } from "react";
import Logo from "../images/logo.png";
export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="logo">
        <img src={Logo} alt={"Barbecue Logo"} />
      </header>
    );
  }
}
