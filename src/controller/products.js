const model = require("../models/products");
const products = require("../data/products.json");
const categories = require("../data/categories.json");


module.exports = {
    show: (req, res)=> {
         res.render("products/show",{
            product: products.find(product => product.id == req.params.id),
            styles: ["/products/show"]
    })},
    categories: (req, res) => res.render("products/categories",{
        products: products,
        category: categories,
        styles: ["/products/categories"]
    })

}