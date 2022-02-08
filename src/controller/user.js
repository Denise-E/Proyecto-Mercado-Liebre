
module.exports = {
    login: (req, res)=> res.render("login",{
        styles:["login"]
    }),
    register: (req, res)=> res.render("register",{
        styles:["register"]
    }),
    save: (req, res)=> res.send("hola"),
    access: (req, res)=> res.send("hola"),

}