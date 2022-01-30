
module.exports = {
    list: (req, res)=> res.render("products/list",{
        styles: ["/products/list"]
    }),
    show: (req, res)=> res.render("products/show",{
        styles: ["/products/show"]
    }),
}