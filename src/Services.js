import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faThumbsUp,
  faPencilAlt,
  faLaugh
} from "@fortawesome/free-solid-svg-icons";

import "./services.css";

const phone = <FontAwesomeIcon icon={faMobileAlt} />;
const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />;
const pencil = <FontAwesomeIcon icon={faPencilAlt} />;
const laugh = <FontAwesomeIcon icon={faLaugh} />;

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>SERVICES</h3>
        <h2>What We Offer</h2>

        <div className="row">
          <div>
            <span>{phone}</span>
            <h4>Responsive</h4>
            <p>Looks great on any screen size</p>
          </div>
          <div>
            <span>{thumbsUp}</span>
            <h4>Redesigned</h4>
            <p>Freshly redesigned for Bootstrap 4</p>
          </div>
          <div>
            <span>{pencil}</span>
            <h4>Favorited</h4>
            <p>Millions of users love Start Bootstrap</p>
          </div>
          <div>
            <span>{laugh}</span>
            <h4>Fun</h4>
            <p>Have fun designing something new!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
