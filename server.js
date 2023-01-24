var express = require("express");
var app = express();

// Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors());

// Routes GET requests to /lessons to the request handler
app.get("/lessons", function(request, response) {
    response.json( [{topic: 'Math',location:'Hendon',price:100},
                    {topic: 'Math',location:'Colindale',price:80},
                    {topic: 'Math',location:'Brent Cross',price:90},
                    {topic: 'Math',location:'Golden Green',price:120}]);
    });

// Routes GET requests to /lessons to the request handler
app.get("/user", function(request, response) 
    {response.json({email:"abc@gmail.com",password:"password123"});});

// If it is not a GET request, also servers a 404 error.
app.use(function(request, response) {response.status(404).send("Page not found!");});

// Starts the server on port 3000
app.listen(3000);
