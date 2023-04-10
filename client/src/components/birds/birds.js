import React from "react";
import "./birds.scss";

class Birds extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>
      </div>
    );
  }
}

export default Birds;
