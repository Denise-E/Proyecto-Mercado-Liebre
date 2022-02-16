const express = require("express");
const router = express.Router();
const categories= require("../controller/categories")

router.get('/:id', categories.index);

module.exports = router
