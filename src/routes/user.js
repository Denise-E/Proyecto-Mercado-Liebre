const path = require('path');
const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const {validate} = require("../models/users");  
const access = require("../middlewares/access");
const auth = require("../middlewares/auth");
const multer = require ("multer");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
      filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})});



router.get("/",[auth], user.index);

router.get("/login", user.login);
router.get("/register", user.register);
router.get("/profile",[access], user.profile);

router.get("/edit/:id", user.edit);

router.post("/",[validate, upload.single("image")], user.save); // REGISTER
router.post("/access", user.access); // LOGIN
router.post("/logout",[validate], user.logout);

router.put("/:id", user.modify);
router.delete("/", user.delete);




module.exports = router;