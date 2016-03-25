var url = require('url');
var express = require('express');

var app = express();

app.use(express.static(__dirname+ '/../public/client'));

app.get("/", function(req,res){
	res.status(200);
	res.sendFile('index')
})

app.get("/aboutme", function(req,res){
	res.status(200);
	res.sendFile('index')
})

var port = process.env.PORT || 3468;
app.listen(port);
console.log("Listening on: ", port)