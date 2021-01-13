const express = require ("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

//Set Hanlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Listen on Port: ", PORT);
})