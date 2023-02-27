import React from "react";
import axios from "axios";
import Popup from "../popup/popup";
import { Loader } from "../components/loader/loader";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      phone: "",
      lastName: "",
      textArea: "",
      loading: false,
      popup: false,
      message: "",
      form: true,
    };
  }
  resetFormDisplay = () => {
    this.setState({ form: true });
  };
  displayPopup = (message) => {
    this.setState({ message });
    this.setState({ popup: true });
    setTimeout(() => {
      this.setState({ popup: false });
      this.resetFormDisplay();
    }, 2500);
  };

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      textArea: "",
    });
  };
  formClick = (e) => {
    // prevent default behavior
    e.preventDefault();
    this.setState({ loading: true });
    this.setState({ form: false });

    const userData = { ...this.state };
    // send the request
    axios
      .post(`${process.env.REACT_APP_BACKENDLINK}/api/form`, { userData })
      .then((response) => {
        this.setState({ loading: false });
        if (response.data.message === "success") {
          this.resetForm();
          this.displayPopup("your message has been sent");
        } else {
          this.displayPopup("problem with sending your message");
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
        this.displayPopup(err.message);
      });
  };

  handleChange = (e) => {
    // insert a switch statement to check which state to update;
    switch (e.target.name) {
      case "firstname":
        this.setState({ firstName: e.target.value });
        break;
      case "lastname":
        this.setState({ lastName: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "textArea":
        this.setState({ textArea: e.target.value });
        break;

      case "phone":
        this.setState({ phone: e.target.value });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <>
        <div className="form_popup">
          {this.state.popup && <Popup message={this.state.message} />}
          {this.state.loading && <Loader />}
        </div>
        {this.state.form && (
          <form id="contact" action="" method="post" onSubmit={this.formClick}>
            <div className="form_Group">
              <label htmlFor="first">First: </label>
              <input
                type="text"
                required
                id="first"
                name="firstname"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form_Group">
              <label htmlFor="last">Last Name: </label>
              <input
                type="text"
                required
                id="last"
                name="lastname"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form_Group">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className="form_Group">
              <label htmlFor="phone">Phone Number (optional) :</label>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={this.handleChange}
                maxLength="10"
                value={this.state.phone}
              />
            </div>

            <div className="form_Group">
              <textarea
                placeholder="Type your message here...."
                tabIndex="8"
                required
                name="textArea"
                onChange={this.handleChange}
                value={this.state.textArea}
              ></textarea>
            </div>

            <button id="submit">Send Message</button>
          </form>
        )}
      </>
    );
  }
}

export default Form;
