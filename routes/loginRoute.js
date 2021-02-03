const express = require("express");
const userCtrl = require("../controllers/userCtrl.js");
// create router

const router = express.Router();

router.post("/login", userCtrl.postLogin);

module.exports = router;
