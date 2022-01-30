const products = require("../data/products.json");
const model = require("../models/products");

module.exports = {
    home: (req, res)=> res.render("home",{
        products: products,
        styles: ["home"]
    })
}
