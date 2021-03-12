import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.css";

export default class App extends Component {
  //other logic
  render() {
    return (
      <div className="Loader-container">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
          // timeout={3000}
        />
      </div>
    );
  }
}
