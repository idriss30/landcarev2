import "./message.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../components/button/button";
import Footer from "../components/footer/footer.js";

function MessageDisplay() {
  // extract the message id
  const { id } = useParams();
  // set state for message
  const [message, setMessage] = useState({});
  // launch request on component mounting
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKENDLINK}/api/form/message/${id}`)
      .then((messageObject) => {
        //extract final message
        const mess = messageObject.data.message;
        setMessage(mess);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <section className="message">
        <div className="message__container">
          <ul className="message__container-list">
            <li> from : {message.firstName}</li>
            <li> Date : {message.date}</li>
            <li> email : {message.email}</li>
            <li>phone: {message.phone}</li>
            <li>message: {message.textArea}</li>
          </ul>
          <div>
            <Button
              scss="btn-small"
              onClick={() => {
                axios
                  .get(
                    `${process.env.REACT_APP_BACKENDLINK}/api/form/message/delete/${message._id}`
                  )
                  .then((serverAnswer) => {
                    if (serverAnswer.data.message === "success") {
                      window.location.replace(
                        `${process.env.REACT_APP_LINK}/users/profile`
                      );
                    }
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Delete
            </Button>
            <Button
              scss="btn-small"
              onClick={() => {
                window.location.replace(
                  `${process.env.REACT_APP_LINK}/users/profile`
                );
              }}
            >
              Previous Page
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MessageDisplay;
