import "./loader.scss";
import React from "react";

class Loader extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="loader_container">
          <div className="loader_item"></div>
        </div>
      </div>
    );
  }
}

export { Loader };
