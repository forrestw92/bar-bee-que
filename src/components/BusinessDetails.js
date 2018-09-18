import React, { Component } from "react";
import PropTypes from "prop-types";
import Loading from "../images/loader.svg";
import YelpApi from "../api";
import StarRating from "./StarRating";
import DollarSign from "../images/dollar-sign.svg";
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export default class BusinessDetails extends Component {
  constructor() {
    super();
    this.state = {
      restaurantDetails: {},
      error: false
    };
  }

  t24to12 = time => {
    const tTime = { H: time.substr(0, 2), M: time.substr(2, 4) };
    const H = parseInt(tTime.H, 10) % 12;
    const M = parseInt(tTime.M, 10);
    const suffix = tTime.H >= 12 ? "PM" : "AM";
    const nTime = H + (M !== 0 ? ":" + M : suffix);
    return nTime;
  };
  async componentDidMount() {
    try {
      const restaurantDetails = await YelpApi.lookup(
        this.props.singleRestaurant
      );
      this.setState({
        restaurantDetails
      });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const details = this.state.restaurantDetails;
    if (this.state.error) {
      return <h1>Error! Please Reload The Page.</h1>;
    }
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
              <img src={details.image_url} alt={""} />
            </div>
            <div className="cardBody">
              <ul className="cardDetails">
                <li className="detail" id="name">
                  {details.name}
                </li>
                <li className="detail">
                  <StarRating rating={details.rating} />(
                  <span aria-label={"Review Count" + details.review_count}>
                    {details.review_count}
                  </span>
                  )
                </li>
                <li className="detail">
                  {details.price.split("$").map((price, idx) => (
                    <img key={idx} src={DollarSign} alt={""} />
                  ))}
                </li>
                <li className="detail">
                  {details.coordinates &&
                    details.location &&
                    details.location.display_address && (
                      <a
                        href={
                          "https://www.google.com/maps/?q=" +
                          details.location.display_address.join(",")
                        }
                      >
                        <pre>{details.location.display_address.join("\n")}</pre>
                      </a>
                    )}
                </li>
                <li className="detail" id="phone">
                  <a
                    href={"tel:" + details.phone}
                    aria-label={
                      details.phone && details.phone.split("").join(" ")
                    }
                  >
                    {details.display_phone}
                  </a>
                </li>
                <ul className="businessHours">
                  {details.hours &&
                    details.hours.map(time => {
                      const hours = DAYS.map((day, index) => {
                        const startHours = time.open
                          .filter(hours => hours.day === index)
                          .map(hours => {
                            return hours.start;
                          })
                          .join("/");
                        const endHours = time.open
                          .filter(hours => hours.day === index)
                          .map(hours => {
                            return hours.end;
                          })
                          .join("/");
                        return { day, startHours, endHours };
                      });
                      return hours.map(day => {
                        if (!day.startHours) {
                          return (
                            <li key={day.day} className="detail">
                              {day.startHours === "" && (
                                <React.Fragment>
                                  <span className="day">{day.day} </span>
                                  <span className="hours">Closed!</span>
                                </React.Fragment>
                              )}
                            </li>
                          );
                        }
                        if (day.startHours.indexOf("/") === -1) {
                          return (
                            <li key={day.day} className="detail">
                              <span className="day">{day.day} </span>
                              <span className="hours">
                                {this.t24to12(day.startHours)} To{" "}
                                {this.t24to12(day.endHours)}
                              </span>
                            </li>
                          );
                        } else {
                          return (
                            <li key={day.day} className="detail">
                              <span className="day">{day.day} </span>
                              {day.startHours.split("/").map((start, idx) => {
                                return (
                                  <span key={idx} className="hours">
                                    {this.t24to12(start)} To{" "}
                                    {this.t24to12(day.endHours.split("/")[idx])}
                                  </span>
                                );
                              })}
                            </li>
                          );
                        }
                      });
                    })}
                </ul>
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
