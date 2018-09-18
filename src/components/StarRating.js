import React, { Component } from "react";
import PropTypes from "prop-types";
import StarFull from "../images/star-full.svg";
import StarHalf from "../images/star-half.svg";
import StarEmpty from "../images/star.svg";

export default class StarRating extends Component {
  genStars() {
    let rating = this.props.rating;
    let dm = [
      <img src={(rating <= 1 && rating > 0) ? StarHalf: (rating >=1) ? StarFull : StarEmpty}  alt={""} key={1} />,
      <img src={(rating <= 2 && rating > 1) ? StarHalf: (rating >=2) ? StarFull : StarEmpty} alt={""} key={2} />,
      <img src={(rating <= 3 && rating > 2) ? StarHalf: (rating >=3) ? StarFull : StarEmpty} alt={""} key={3} />,
      <img src={(rating <= 4 && rating > 3) ? StarHalf: (rating >=4) ? StarFull : StarEmpty} alt={""} key={4} />,
      <img src={(rating <= 5 && rating > 4) ? StarHalf: (rating === 5) ? StarFull : StarEmpty} alt={""} key={5} />
    ];
    return dm;
  }
  render() {
    return this.genStars();
  }
}
StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};
