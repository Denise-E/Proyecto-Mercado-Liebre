const validator = require('express-validator');
const model = require('../models/users');
module.exports = {
    index: (req, res) => res.send(model.all()),
    login: (req, res)=> res.render("login",{
        styles:["login"]
    }),
    register: (req, res)=> res.render("register",{
        styles:["register"]
    }),
    profile: (req, res)=> res.render("profile",{
        styles:[]
    }),
    // Donde procesamos log in:
    access: (req,res) =>  {
        //Contiene erorres de las validaciones
        let errors = validator.validationResult(req);

        //Esto para que me valide contraseña
        if (!errors.isEmpty()){
            return res.render("login",{
                styles:["login"],
                errors: errors.mapped()
            })
        }

        //Para saber cuado se registran si anteriormente estaban registrados :
        let exist = user.search("email", req.body.email);
        if (!exist){
            return res.render("login",{ 
                errors:{
                    email:{
                        msg: "Email is not registred "
                    }
                }
            })
        }

        //Hace comparativo para ver si está bien la pasada
        if (!bcrypt.compareSync(req.body.password, exist.password)){
            return res.render("login",{ 
                errors:{
                    password:{
                        msg: "Password is not valid",
                    }
                }
            })
        }

        // Para la parte de recordar el usuaio (remember):
        //Con este tiempo al cookie dura un mes
        if(req.body.remember){
            res.cookie("email", req.body.email, {maxAge: 1000*60*60*24*30})
        }

        //Guardo el usuario (si hacer un return, res.send de esto aparece datos usuario)
        req.session.user = exist;

        res.redirect("/");
    },
    // Donde procesamos registro
    save: (req,res) => {
        //Contiene erorres de las validaciones
        let errors = validator.validationResult(req);

        //Esto para que me valide cerrores
        /**  if (!errors.isEmpty()){
            return res.render("register",{
                styles:["register"],
                errors: errors.mapped()
            })
        }*/

        //Para saber cuado se registran si anteriormente estaban registrados :
        let exist = model.search("email", req.body.email);
        if (exist){
            return res.render("register",{ 
                styles:["register"],
                errors:{
                    email:{
                        msg: "Email is registred already"
                    }
                }
            })
        }

        //Para guardar usuario registrado :
        let userRegistred = model.create(req.body)

        res.redirect("/users/login");
    },
    logout: (req,res) => {
        delete req.session.user
        //null para eliminar datod e emial guardado
        res.cookie("email", null,{maxAge: -1})
        //Redirecciono a la home
        return res.redirect("/")
    },
}