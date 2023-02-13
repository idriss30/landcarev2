import "./popup.scss";
import React from "react";
import { Link } from "react-router-dom";

class Popup extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.replace(this.props.url);
    }, 3000);
  }
  render() {
    return (
      <>
        <div className="popup">
          <div className="popup__container">
            <Link to="/" alt="close-button">
              <i className="fas fa-times-circle"></i>
            </Link>
            <div className="popup__container-text">
              <p>{this.props.children}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Popup;
