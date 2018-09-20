import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../images/logo.png";
import BackArrow from "../images/arrow-left.svg";
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      focus: false,
      ele: {}
    };
  }
  handleClick = () => {
    this.props.openAllMarkers();
    this.props.updateState({
      singleDetails: false,
      center: this.props.defaultCenter,
      zoom: 11,
      restaurantDetails: {}
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.btn) {
      this.btn.focus();
    }
  }
  render() {
    return (
      <header className="logo">
        <img src={Logo} alt={"Barbecue Logo"} />
        {this.props.singleDetails && (
          <button
            className="button"
            id="back-button"
            onClick={this.handleClick}
            aria-label={"Go Back."}
            ref={c => (this.btn = c)}
          >
            <img src={BackArrow} alt={""} />
          </button>
        )}
      </header>
    );
  }
}
Header.propTypes = {
  openAllMarkers: PropTypes.func.isRequired,
  singleDetails: PropTypes.bool.isRequired,
  updateState: PropTypes.func.isRequired,
  defaultCenter: PropTypes.object.isRequired
};
