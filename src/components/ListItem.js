import React, { Component } from "react";
export default class ListItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <li className="businessCard" tabIndex={0} onFocus={() => this.props.handleFocus(this,this.props.index)}>
        <div className="cardImage">
          <img src={this.props.image_url} />
        </div>
        <div className="cardBody">
          <ul className="cardDetails">
            <li className="detail" id="name">
              {this.props.name}
            </li>
            <li className="detail">
              Rating:
              {this.props.rating}({this.props.review_count})
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
