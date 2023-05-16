import React, { Component } from "react";
import "../../assets/css/loader.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="containerloader">
        <div className="holder">
          <div className="box"></div>
        </div>
        <div className="holder">
          <div className="box"></div>
        </div>
        <div className="holder">
          <div className="box"></div>
        </div>
      </div>
    );
  }
}
