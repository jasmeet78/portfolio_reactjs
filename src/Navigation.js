import React, { Component } from "react";

import "./navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home", "About", "Services", "Portfolio", "Contact"];
    const navLinks = sections.map(section => {
      return (
        <li key={section.index}>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });

    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>

        <ul>{navLinks}</ul>
      </nav>
    );
  }
}

export default Navigation;
