var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
var l=require('lodash');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use('/static', express.static('static'))
app.get("/", (req, res) => {
    
         res.render('code2');
       

});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});






