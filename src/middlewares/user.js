const userModel = require("../models/users");

const user = (req,res,next) =>{
    //Porque inicialmente no hay usuarios en la app
    let user = null;
    //Veo si hay cookie y si tiene guardado mail
    if(req.cookie && req.cookie.email){
        //Guardo cookie en user
        user = userModel.search("email", req.cookie.email)
        //guarda e session el usuario
        req.session.user = user;
    }

    if(req.session && req.session.email){
        user = req.session.user;
    }

    //Como voy a compartirlo con la vista:
    //locals es una propiedad de res que permite enviar los datos a la vista
    res.locals.user = user

    // SI O SI si son a nivel aplicación
    // retunr necesario si es arrow function con{}
    return next()
}

module.exports = user;