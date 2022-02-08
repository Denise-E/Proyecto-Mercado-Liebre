const path = require("path");
const fs = require("fs");
const {body} = require("express-validator");

const model = {
    validate :[
        body("email").isEmpty().isEmail().withMessage("Invald Email"),
        body("password").isEmpty().isLength({min:5}).withMessage("Min 5 characters"),
    ]
}

module.exports = model;