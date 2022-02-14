const model = require("../models/users")

const access = (req,res,next) =>{

    let confirm = req.session && req.session.user ? req.session.user.isAdmin ? next() : res.redirect("/") : res.redirect("/users/login")

    return confirm
}

module.exports = access
