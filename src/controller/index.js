const products = require("../data/products.json");
const users = require("../data/users.json");
const model = require("../models/products");


module.exports = {
    home: (req, res)=> res.render("home",{
        products: products,
        styles: ["home"]
    }),
    searchBar:(req,res)=> {
        //let research = model.search(req.body.search);
        //console.log(research);
    }
}
