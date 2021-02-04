import React from "react";
import "./profile.scss";
import axios from "axios";
import Footer from "../components/footer/footer.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    axios
      .get("/api/form/messages")
      .then((result) => {
        this.setState({ messages: [...result.data.messages] });
      })
      .catch((err) => console.log(err));
  }
  handleDelete = (e) => {
    axios
      .get(`/api/form/message/delete/${e.target.id}`)
      .then((serverAnswer) => {
        if (serverAnswer.data.message === "success") {
          const list = [...this.state.messages];
          const newList = list.filter((message) => message._id !== e.target.id);
          this.setState({ messages: [...newList] });
        }
      })
      .catch((err) => console.log(err));
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
                        <a
                          className="group__icon-envelope"
                          href={`http://localhost:3000/message/${message._id}`}
                        >
                          <i className="far fa-envelope"></i>
                        </a>
                        <p className="group__icon-text">
                          from
                          <span>
                            {`${message.firstName} , ${message.lastName}`}
                          </span>
                          on {message.date}
                          <a
                            href={`http://localhost:3000/message/${message._id}`}
                          >
                            Click
                          </a>
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
