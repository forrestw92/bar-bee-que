import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../images/loader.svg";
import YelpApi from "../api";
export default class BusinessDetails extends Component {
  constructor() {
    super();
    this.state = {
      restaurantDetails: {}
    };
  }

  async componentDidMount() {
    try {
      const restaurantDetails = await YelpApi.lookup(
        this.props.singleRestaurant
      );
      console.log(restaurantDetails);
      this.setState({
        restaurantDetails
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const details = this.state.restaurantDetails;
    return (
      <React.Fragment>
        {!details && (
          <li>
            <img src={Loading} className="loading" alt={"Loading"} />{" "}
          </li>
        )}
        {details.name && (
          <li className="businessCard" tabIndex={0}>
            <div className="cardImage">
              <img src={details.image_url} />
            </div>
            <div className="cardBody">
              <ul className="cardDetails">
                <li className="detail" id="name">
                  {details.name}
                </li>
                <li className="detail">
                  Rating:
                  {details.rating}(
                  <span aria-label={"Review Count" + details.review_count}>
                    {details.review_count}
                  </span>
                  )
                </li>
                <li className="detail">
                  Price:
                  {details.price}
                </li>
                <li className="detail">{details.display_phone}</li>
              </ul>
            </div>
          </li>
        )}
      </React.Fragment>
    );
  }
}
BusinessDetails.propTypes = {
  singleRestaurant: PropTypes.string.isRequired
};
