const express = require("express");
const router = express.Router();
const user = require("../controller/user");

router.get("/login", user.login);
router.get("/register", user.register);

module.exports = router;