import React from "react";
import Button from "../components/button/button";
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

  checkEmail = (email) => {
    // create regex to check email
    const reGex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reGex.test(String(email).toLowerCase());
  };
  resetForm = () => {
    this.setState(
      { firstName: "", lastName: "", email: "", phone: "", textArea: "" },
      () => {
        window.location.href = "http://localhost:3000/popup";
      }
    );
  };
  formClick = (e) => {
    // prevent default behavior
    e.preventDefault();
    // check email state
    const email = this.checkEmail(this.state.email);
    if (email) {
      const userData = { ...this.state };
      // send the request
      axios
        .post("http://localhost:4000/form", { userData })
        .then((response) => {
          if (response.data.message === "success") {
            this.resetForm();
          } else {
            alert("some error with your message");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("your email is not valid");
    }
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

          <Button scss="btn" id="submit">
            Send Message
          </Button>
        </form>
      </>
    );
  }
}

export default Form;
