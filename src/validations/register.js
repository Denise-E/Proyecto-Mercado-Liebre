const validate = require('express-validator');


module.exports = [
    validate.body('name').notEmpty().withMessage('Este campo es obligatorio').isLength({min:2}),
    validate.body('lastName').notEmpty().withMessage('Este campo es obligatorio').isLength({min:2}),
    validate.body('email').notEmpty().withMessage('Este campo es obligatorio').isEmail(),
    validate.body('birthdayDate').notEmpty().withMessage('Este campcampo es obligatorio').isDate(),
    validate.body('adress').notEmpty().withMessage('Este campo es obligatorio').isLength({min:5}),
    validate.body('userId').notEmpty().withMessage('Este campo es obligatorio').isLength({min:2}),
    validate.body('password').notEmpty().withMessage('Este campo es obligatorio').isLength({min:8}),
    validate.body('image').contains(['.jgp', '.jpeg', '.png', '.gif']).withMessage('Solo se aceptan archivos jpg, jpeg, gif y png')
]