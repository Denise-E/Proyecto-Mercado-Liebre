const validate = require('express-validator');

module.exports = [
    validate.body('userId').notEmpty().withMessage('Este campo es obligatorio'),
    validate.body('password').notEmpty().withMessage('Este campo es obligatorio')
]