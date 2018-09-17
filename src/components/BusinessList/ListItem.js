import React, { Component } from "react";
import PropTypes from "prop-types";
export default class ListItem extends Component {
  render() {
    return (
      <li
        className="businessCard"
        tabIndex={0}
        onFocus={() => this.props.handleFocus(this)}
        onClick={() => this.props.handleClick(this)}
        onKeyUp={e => this.props.handleKeyInput(this, e)}
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
              Rating:
              {this.props.rating}(
              <span aria-label={"Review Count" + this.props.review_count}>
                {this.props.review_count}
              </span>
              )
            </li>
            <li className="detail">
              Price:
              {this.props.price}
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
  handleKeyInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired
};
