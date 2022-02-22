const express = require("express");
const cookie = require("cookie-parser");
const session = require("express-session")
const method = require("method-override")
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:" + app.get("port")));

app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));

app.use(express.urlencoded({extended: true}));
app.use(cookie());
app.use(session({
    secret: 'Secreto !',
    saveUninitialized: true,
    resave: false,
}));
app.use(method("m"));

app.use(require('./middlewares/user.js'));

app.use(require("./routes/index"));
app.use("/users", require("./routes/user"));
app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));