const model = require("../models/products");
const products = require("../data/products.json");

module.exports = {
    show: (req, res)=> {
         res.render("products/show",{
            product: products.find(product => product.id == req.params.id),
            styles: ["/products/show"]
    }) 
}
}