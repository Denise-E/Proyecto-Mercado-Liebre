const model = require("../models/categories");
const products = require("../data/products.json");
const categories = require("../data/categories.json");


module.exports = {
    index: (req, res) =>{
        let result = model.search("id", req.params.id);
        res.render("products/categories", {
            category: result,
            products: products,
            styles: "products/categories",
        })
    
}
}
