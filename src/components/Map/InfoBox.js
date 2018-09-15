import React, { Component } from "react";
import PropTypes from "prop-types";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
export default class CustomInfoBox extends Component {
  render() {
    return (
      this.props.isOpen && (
        <InfoBox
          position={this.props.position}
          onCloseClick={this.props.handleClose}
        >
          <div className="infoBox">{this.props.name}</div>
        </InfoBox>
      )
    );
  }
}
CustomInfoBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  position: PropTypes.object.isRequired
};
