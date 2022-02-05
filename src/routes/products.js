const express = require("express");
const router = express.Router();
const product = require("../controller/products")

router.get('/:id', product.show);

module.exports = router