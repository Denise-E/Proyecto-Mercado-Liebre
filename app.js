const express = require("express");
const app = express();
const path = require("path");

app.set("port", 3003);

app.listen(app.get("port"), ()=> console.log("Listening on port http://localhost:3003" + app.get("port")));

app.get("/", (req,res)=> res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.use(express.static(path.resolve(__dirname, "./public")));
