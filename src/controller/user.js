const validator = require('express-validator');
const model = require('../models/users');
const bcrypt = require("bcrypt");

module.exports = {
    index: (req, res) => res.render("users/index",{
        users: model.all(),
        styles: ["users/index"]
    }),
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

        let exist = model.search("userId", req.body.userId);
        if (!exist){
            return res.render("login",{ 
                styles:["login"],
                errors:{
                    email:{
                        msg: "El usuario no está registrado "
                    }
                }
            })
        }

        //Hace comparativo para ver si está bien la pasada
        if (!bcrypt.compareSync(req.body.password, exist.password)){
            return res.render("login",{ 
                styles:["login"],
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
            res.cookie("userId", req.body.userId, {maxAge: 1000*60*60*24*30})
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

        let exists = model.search("userId", req.body.userId);
        if (exists){
            return res.render("register",{ 
                styles:["register"],
                errors:{
                    userId:{
                        msg: "El nombre de usuario ya existe"
                    }
                }
            })
        }

        req.body.image = req.file ? req.file.fileName : "default.png";

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
    delete:(req,res)=> {
        model.delete(req.body.id)
        return res.redirect("/users/")
    },
    edit: (req,res) => 
    res.render("users/edit",{
        users: model.all(),
        user: model.search("id", req.params.id),
        styles: "users/edit"
    }),
    modify: (req,res) => {
        let updated = model.edit(req.params.id, req.body)
        return res.redirect("/users/")
        
    },
}