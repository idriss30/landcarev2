import React from "react";
import "./profile.scss";
import axios from "axios";
import Footer from "../components/footer/footer.js";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKENDLINK}/api/form/messages`)
      .then((result) => {
        this.setState({ messages: [...result.data.messages] });
      })
      .catch((err) => alert(err));
  }
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
      .catch((err) => alert(err));
  };
  render() {
    const list = [...this.state.messages];
    return (
      <>
        <section className="messages">
          <h1>Welcome Admin!</h1>
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
                          to={`${process.env.REACT_APP_LINK}/message/${message._id}`}
                        >
                          <i className="far fa-envelope"></i>
                        </Link>
                        <p className="group__icon-text">
                          from
                          <span>
                            {`${message.firstName} , ${message.lastName}`}
                          </span>
                          on {message.date}
                          <Link
                            to={`${process.env.REACT_APP_LINK}/message/${message._id}`}
                          >
                            Click
                          </Link>
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
