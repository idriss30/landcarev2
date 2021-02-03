//import form model
let Message = require("../models/message.model");

module.exports.submitForm = async (req, res, next) => {
  // get the message body
  const userMessage = { ...req.body };
  const { firstName, lastName, email, phone, textArea } = {
    ...userMessage.userData,
  };
  const newMessage = new Message({
    firstName,
    lastName,
    email,
    phone,
    textArea,
  });

  // save the message to the database
  newMessage
    .save()
    .then(() => {
      res.json({ message: "success" });
    })
    .catch((err) => console.log(err));
};

//get all the messages from the database

module.exports.getMessages = (req, res, next) => {
  Message.find((error, messages) => {
    if (error) {
      console.error(error);
    } else {
      res.json({ messages });
    }
  });
};

module.exports.getMessage = (req, res, next) => {
  // find the message in the database
  Message.findOne({ _id: req.params.id }, (error, message) => {
    if (error) {
      res.json({ error });
    } else {
      res.json({ message });
    }
  });
};

// create a controller to delete a message on click
module.exports.deleteMessage = (req, res, next) => {
  const id = req.params.id;
  Message.deleteOne({ _id: id }, (err) => {
    err ? console.log(err) : res.json({ message: "success" });
  });
};
