import React, { Component } from "react";
import Background from "./img/hero.png";

import "./header.css";

const heroStyles = {
  backgroundImage: `url( ${Background} )`,
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <header style={heroStyles}>
        <h1>{this.props.title}</h1>
        <p>A Free Bootstrap Theme by Start Bootstrap</p>
        <a href="#button">{this.props.button}</a>
      </header>
    );
  }
}

export default Header;
