const path = require("path");
const fs = require("fs");
const {body} = require("express-validator");
const bcrypt = require("bcrypt");

const model = {
    file: path.resolve(__dirname, "../data/users.json"),
    read: () => fs.readFileSync(model.file, "utf-8"),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    search: (prop, value) => model.all().find( e => e[prop] == value),
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        birthdayDate: data.birthdayDate,
        adress: data.adress,
        userId: data.userId,
        password: bcrypt.hashSync(data.password, 10),
        rol: data.rol,
        interests: [data.interests],
        image: data.image  ? data.image : "default.png",
        isAdmin: String(data.email).includes("@mercadoliebre.com") ,
        isActive: true
    }),
    create: data => {
        let all = model.all();
        let user = model.generate(data);
        all.push(user);
        model.write(all);
        return user;
    },
    delete: id => {
        let deleted = model.all().filter(e => e.id != id)
        model.write(deleted)
    },
    edit: (id,data) =>{
        let all = model.all();
        let updated = all.map (e =>{
            if(e.id == id){
                e.name = data.name;
                e.lastName = data.lastName;
                e.email = data.email;
                e.birthdayDate = data.birthdayDate;
                e.adress = data.adress;
                e.userId = data.userId;
                e.password = data.password;
                e.rol = data.rol;
                e.interests = [data.interests];
                e.image = data.image;
                return e
            }
            return e
        })
        model.write(updated);
        let product = model.search ("id", id);
        return product
    },
    validate :[
        body("name").isEmpty().isLength({min:2}),
        body("lastName").isEmpty().isLength({min:2}),
        body("email").isEmpty().isEmail().withMessage("Invalid Email"),
        body("password").isEmpty().isLength({min:5}).withMessage("Min 5 characters"),
        body("userId").isEmpty().isLength({min:5}).withMessage("Min 5 characters"),
        body("password").isEmpty().isLength({min:8}).withMessage("Min 8 characters"), // Más valdiaciones
        body("passwordConfirmation").isEmpty().isLength({min:8}).withMessage("Min 8 characters"), // más validaciones e igualq eu el de arriba
        body("rol").isIn(["Comprador", "Vendedor"]), // Que sea seleccionado - un select con options
        body("interests").isIn(["Electronica", "Moda", "Hogar", "Jugueteria", "Vida sana"]) // Que haya uno al menos seleccionado - select con input checkbox 
    ]
}

module.exports = model;
