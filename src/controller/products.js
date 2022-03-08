const model = require("../models/products");
const products = require("../data/products.json");
const categories = require("../data/categories.json");


module.exports = {
    show: (req, res)=> {
        let product = products.find(product => product.id == req.params.id);
        if(product){
            res.render("products/show",{
            product,
            styles: ["/products/show"]
            })
         
    }else{
        res.send("El producto buscado no existe")
        // RENDER CON VISTA ERROR
    }
    },

}