const path = require("path");
const fs = require("fs");
const {body} = require("express-validator");

const model = {
    validate :[
        body("name").isEmpty().isLength({min:2}),
        body("lastName").isEmpty().isLength({min:2}),
        body("email").isEmpty().isEmail().withMessage("Invald Email"),
        body("password").isEmpty().isLength({min:5}).withMessage("Min 5 characters"),
        body("userId").isEmpty().isLength({min:5}).withMessage("Min 5 characters"),
        body("password").isEmpty().isLength({min:8}).withMessage("Min 8 characters"), // Más valdiaciones
        body("passwordConfirmation").isEmpty().isLength({min:8}).withMessage("Min 8 characters"), // más validaciones e igualq eu el de arriba
        body("rol").isIn(["Comprador", "Vendedor"]), // Que sea seleccionado - un select con options
        body("interests").isIn(["Electronica", "Moda", "Hogar", "Jugueteria", "Vida sana"]) // Que haya uno al menos seleccionado - select con input checkbox 
    ]
}

module.exports = model;