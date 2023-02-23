const express = require("express");
const userCtrl = require("../controllers/userCtrl.js");
// create router

const router = express.Router();

router.post("/login", userCtrl.postLogin);
router.get("/checkToken", userCtrl.checkToken);

module.exports = router;
