const express = require("express");
const router = express.Router();

const {login, signup} = require("../Controllers/Auth");

// router.post("/login", login);
router.post("/signup", signup);

module.exports = router;

// no change today Sorry 24-July
// no change today Sorry 25-July
// No change today Sorry 28-July-2023