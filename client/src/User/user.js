import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
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
      redirect: false,
    };
  }

  componentDidMount() {}
  checkToken = () => {
    this.setState({ loading: true });
    axios
      .get(`${process.env.REACT_APP_BACKENDLINK}/api/users/checkToken`, {
        withCredentials: true,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.setState({ loading: false });
  };
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
  displayPopup = (message) => {
    this.setState({ popup: true });
    this.setState({ message });
    setTimeout(() => {
      this.setState({ popup: false });
    }, 2500);
  };

  hidePopup = () => {
    this.setState({ popup: false });
  };

  resetForm = () => {
    this.setState({ username: "" });
    this.setState({ password: "" });
  };
  submitForm = async (e) => {
    e.preventDefault();
    if (this.state.popup) return;
    this.setState({ loading: true });
    // send the userData for verification in backend
    const { username, password } = { ...this.state };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKENDLINK}/api/users/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      this.setState({ loading: false });
      this.resetForm();
      if (response.status === 200) {
        //this.setState({ redirect: true });
        console.log(document.cookie);
      }
    } catch (error) {
      this.resetForm();
      this.setState({ loading: false });
      this.displayPopup(error.message);
    }
  };
  render() {
    return (
      <>
        {this.state.popup && <Popup message={this.state.message} />}
        {this.state.loading && <Loader />}
        {this.state.redirect && <Redirect to="/users/profile" />}

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
                  value={this.state.username}
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
                  value={this.state.password}
                />
              </div>
              <div>
                <Button scss="btn">login</Button>
              </div>
            </form>
          </div>
          <button
            style={{ width: "100px", height: "100px" }}
            onClick={this.checkToken}
          >
            CheckToken
          </button>
        </section>
        <Footer />
      </>
    );
  }
}

export default Login;
