const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const {validate} = require("../models/users");  
const access = require("../middlewares/access");
const auth = require("../middlewares/auth");

router.get("/", user.index);

router.get("/login", user.login);
router.get("/register", user.register);
router.get("/profile",[access], user.profile);

router.post("/",[validate], user.save); // REGISTER
router.post("/access", user.access); // LOGIN
router.post("/logout",[validate], user.logout);



module.exports = router;