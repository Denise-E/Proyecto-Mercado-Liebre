const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const {validate} = require("../models/users");


router.get("/login", user.login);
router.get("/register", user.register);

router.post("/",[validate], user.save);
router.post("/access",[validate], user.access);



module.exports = router;