//var bodyParser = require('body-parser');
var url = require('url');
var express = require('express');

var app = express();

app.use("/",express.static(__dirname+ '/../public/client'));

var port = process.env.PORT || 3468;
app.listen(port);
console.log("Listening on: ", port)