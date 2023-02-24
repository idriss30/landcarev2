import "./popup.scss";
import React from "react";
import { Link } from "react-router-dom";

function Display(props) {
  return (
    <div className="popup">
      <div className="popup__container">
        <Link to="#" alt="close-button" onClick={props.closeButton}>
          <i className="fas fa-times-circle"></i>
        </Link>
        <div className="popup__container-text">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      visible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ visible: false });
    }, 2000);
  }

  closeButton = () => {
    return this.setState({ visible: false });
  };

  render() {
    return (
      <>
        {this.state.visible && (
          <Display
            message={this.props.message}
            closeButton={this.closeButton}
          />
        )}
      </>
    );
  }
}

export default Popup;
