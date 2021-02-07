import React from "react";
import axios from "axios";
import Button from "../components/button/button";
import "./user.scss";
import Footer from "../components/footer/footer.js";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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

  submitForm = (e) => {
    e.preventDefault();
    // send the userData for verification in backend
    const userData = { ...this.state };
    axios
      .post("/api/users/login", { userData })
      .then((response) => {
        const data = response.data;
        if (data.error) {
          alert(data.error);
        } else {
          document.cookie = "valid=true";
          window.location.replace(
            "https://landcare.herokuapp.com/users/profile"
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
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
