const access = (req,res,next) =>{

    let confirm = req.session && req.session.user ? next() : res.redirect("/users/login");

    return confirm
}

module.exports = access;