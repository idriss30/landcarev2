import React from "react";
import axios from "axios";
import Button from "../components/button/button";
import "./user.scss";
import Footer from "../components/footer/footer.js";
import { Loader } from "../components/loader/loader";
import Popup from "../popup/popup";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false,
      popup: false,
      message: "",
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    switch (e.target.name) {
      case "username":
        this.setState({ username: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        return;
    }
  };

  submitForm = async (e) => {
    e.preventDefault();
    // send the userData for verification in backend
    const userData = { ...this.state };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKENDLINK}/api/users/login`,
        {
          userData,
        }
      );
    } catch (error) {
      this.setState({ popup: true });
    }
  };
  render() {
    return (
      <>
        {this.state.popup && <Popup message={this.state.message} />}
        {this.state.loading && <Loader />}
        <section className="login">
          <div className="login__container">
            <h1>Welcome to landC@re admin! </h1>
            <h3>Please login below </h3>
            <form
              className="login__form"
              onSubmit={this.submitForm}
              method="POST"
            >
              <div className="login__form-group">
                <input
                  type="text"
                  name="username"
                  required
                  id="username"
                  autoFocus
                  placeholder="username"
                  onChange={this.handleForm}
                />
              </div>
              <div className="login__form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="password"
                  onChange={this.handleForm}
                />
              </div>
              <div>
                <Button scss="btn">login</Button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Login;
