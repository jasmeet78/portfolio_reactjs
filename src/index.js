import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Services from "./Services";

import "./styles.css";

function App() {
  return (
    <div>
      <Navigation logoTitle="jasmeet" />
      <Header title="Stylish Portfolio" button="Find Out More" />
      <Services />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
