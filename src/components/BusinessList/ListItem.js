import React, { Component } from "react";
import PropTypes from "prop-types";
import StarRating from "../StarRating";
import DollarSign from "../../images/dollar-sign.svg";
export default class ListItem extends Component {
  render() {
    return (
      <li
        className="businessCard"
        tabIndex={0}
        onFocus={() => this.props.handleFocus(this)}
      >
        <div className="cardImage">
          <img src={this.props.image_url} alt={""} />
        </div>
        <div className="cardBody">
          <ul className="cardDetails">
            <li className="detail" id="name">
              {this.props.name}
            </li>
            <li className="detail">
              <StarRating rating={this.props.rating} />(
              <span aria-label={"Review Count" + this.props.review_count}>
                {this.props.review_count}
              </span>
              )
            </li>
            <li className="detail">
              <span
                aria-label={"Price " + this.props.price.split("").join(" ")}
              >
                {this.props.price.split("").map((price, idx) => (
                  <img key={idx} src={DollarSign} alt={""} />
                ))}
              </span>
            </li>
            <li className="detail">
              <button
                className="button"
                onClick={() => this.props.handleClick(this)}
              >
                View Details
              </button>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}
ListItem.propTypes = {
  review_count: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired
};
