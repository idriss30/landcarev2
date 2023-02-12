import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      phone: "",
      lastName: "",
      textArea: "",
    };
  }

  resetForm = () => {
    this.setState(
      { firstName: "", lastName: "", email: "", phone: "", textArea: "" },
      () => {
        window.location.href = `${process.env.REACT_APP_LINK}/popup`;
      }
    );
  };
  formClick = (e) => {
    // prevent default behavior
    e.preventDefault();

    const userData = { ...this.state };
    // send the request
    axios
      .post(`${process.env.REACT_APP_BACKENDLINK}/api/form`, { userData })
      .then((response) => {
        if (response.data.message === "success") {
          // this.resetForm();
        } else {
          alert("some error with your message");
        }
      })
      .catch((err) => console.log(err));
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
      </>
    );
  }
}

export default Form;
