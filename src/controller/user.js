
module.exports = {
    login: (req, res)=> res.render("login",{
        styles:["login"]
    }),
    register: (req, res)=> res.render("register",{
        styles:["register"]
    })
}