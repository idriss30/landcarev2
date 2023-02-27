import React from "react";
import "./profile.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Footer from "../components/footer/footer.js";
import { Link } from "react-router-dom";
import Popup from "../popup/popup";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      redirect: false,
      loading: true,
      popup: false,
      message: "",
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKENDLINK}/api/users/checktoken`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ loading: false });

        if (response.data.message === "jwt expired") {
          this.setState({ redirect: true });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
        this.setState({ redirect: true });
      });

    axios
      .get(`${process.env.REACT_APP_BACKENDLINK}/api/form/messages`)
      .then((result) => {
        this.setState({ loading: false });
        this.setState({ messages: [...result.data.messages] });
      })
      .catch((err) => {
        this.displayPopup(err);
      });
  }

  displayPopup = (message) => {
    this.setState({ message });
    this.setState({ popup: true });
    setTimeout(() => {
      this.setState({ popup: false });
    }, 2500);
  };
  handleDelete = (e) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKENDLINK}/api/form/message/delete/${e.target.id}`
      )
      .then((serverAnswer) => {
        if (serverAnswer.data.message === "success") {
          const list = [...this.state.messages];
          const newList = list.filter((message) => message._id !== e.target.id);
          this.setState({ messages: [...newList] });
        }
      })
      .catch((err) => {
        this.setState({ message: err.message });
        this.setState({ popup: true });
      });
  };

  handleLogout = (e) => {
    e.preventDefault();
    // if (this.state.popup) return;
    this.setState({ loading: true });
    axios
      .get(`${process.env.REACT_APP_BACKENDLINK}/api/users/logout`, {
        withCredentials: true,
      })
      .then((response) => {
        this.setState({ loading: false });
        this.displayPopup(response.data.message);
        setTimeout(() => {
          this.setState({ redirect: true });
        }, 3000);
      })
      .catch((error) => {
        this.setState({ loading: false });
        this.displayPopup(error.message);
      });
  };
  render() {
    const list = [...this.state.messages];
    return (
      <>
        {this.state.redirect && <Redirect to="/" />}
        {this.state.popup && <Popup message={this.state.message} />}
        <section className="messages">
          <h1>Welcome Admin!</h1>
          <Link className="logout_link" to="/" onClick={this.handleLogout}>
            Logout
          </Link>
          <div className="messages__container">
            <ul>
              {list.length > 0
                ? list.map((message) => {
                    return (
                      <li
                        className="messages__container-group"
                        key={message._id}
                      >
                        <Link
                          className="group__icon-envelope"
                          to={`/message/${message._id}`}
                        >
                          <i className="far fa-envelope"></i>
                        </Link>
                        <p className="group__icon-text">
                          from
                          <span>
                            {`${message.firstName} , ${message.lastName}`}
                          </span>
                          on {message.date}
                          <Link to={`/message/${message._id}`}>Click</Link>
                          to read
                        </p>

                        <i
                          onClick={this.handleDelete}
                          className="fas fa-trash-alt"
                          id={message._id}
                        ></i>
                      </li>
                    );
                  })
                : "there is no message at this time"}
            </ul>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Profile;
