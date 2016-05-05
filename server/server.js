var url = require('url');
var express = require('express');
var search = require('./search');
var path = require('path')

var app = express();

app.use(express.static(__dirname+ '/../public/client'));



app.get("/aboutme", function(req,res){
	res.status(200);
	res.sendFile(path.resolve(__dirname + '/../public/client/aboutme.html'))
})

app.get("/projects", function(req,res){
  res.status(200);
  res.sendFile(path.resolve(__dirname + '/../public/client/projects.html'))
})

app.get("/contact", function(req,res){
  res.status(200);
  res.sendFile(path.resolve(__dirname + '/../public/client/contact.html'))
})


app.get("/search", search)


app.get("/", function(req,res){
  res.status(200);
  res.sendFile('index')
})

var port = process.env.PORT || 3468;
app.listen(port);
console.log("Listening on: ", port)