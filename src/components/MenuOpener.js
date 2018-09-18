import React, { Component } from "react";
import PropTypes from "prop-types";
import Arrows from "../images/chevrons-right.svg";
export default class MenuOpener extends Component {
  handleClick = () => {
    this.props.updateState({
      menuOpened: this.props.menuOpened ? false : true
    });
  };
  render() {
    return (
      <div className={this.props.menuOpened ? "menu closed" : "menu"}>
        <button className="opener" onClick={this.handleClick}>
          <img src={Arrows} alt={""} id="arrows" />
        </button>
      </div>
    );
  }
}
MenuOpener.propTypes = {
  updateState: PropTypes.func.isRequired,
  menuOpened: PropTypes.bool.isRequired
};
