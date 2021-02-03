const User = require("../models/user.model");

module.exports.postLogin = (req, res, next) => {
  /// extract userData from the body
  const userData = { ...req.body };
  if (userData) {
    // destructure data
    const { ...user } = { ...userData.userData };
    //check if user exist in database
    User.findOne({ username: user.username }, (err, databaseUser) => {
      if (err) return console.error(err);
      if (!databaseUser) {
        res.json({ error: "can't find user" });
      } else {
        databaseUser.password === user.password
          ? res.json({ databaseUser })
          : res.json({ error: "password don't match" });
      }
    });
  }
};
