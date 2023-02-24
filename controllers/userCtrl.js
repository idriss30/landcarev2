const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.postLogin = async (req, res, next) => {
  /// extract userData from the body
  const userData = { ...req.body };
  // destructure data
  const { username, password } = { ...userData };
  const databaseUser = await User.findOne({ username });
  if (!databaseUser) return res.status(404).json({ message: "user not found" });
  if (databaseUser.password === password) {
    jwt.sign({ username }, process.env.PASSPHRASE, { expiresIn: "1h" });
    return res.status(200).json({ message: "login in" });
  }
  return res.status(403).json({ message: "password not found" });
};

module.exports.checkToken = (req, res, next) => {
  try {
    const token = req.token;
    const decoded = jwt.verify(token, process.env.PASSPHRASE);
    return res.json({ username: decoded.username });
  } catch (error) {
    res.json({ error: error.message });
  }
};
