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
    const token = jwt.sign({ username }, process.env.PASSPHRASE, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "login in" });
  }
  return res.status(403).json({ message: "password not found" });
};

module.exports.checkToken = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(200).json({ message: "no token" });
  try {
    jwt.verify(token, process.env.PASSPHRASE);
    res.status(200).json({ message: "token decoded" });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

module.exports.logout = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json({ message: "you are not logged In" });
  }
  res.clearCookie("token");
  res.status(200).json({ message: "you have been logged out" });
};
