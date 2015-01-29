/* redfern.io
 * 8/16/14
 * Author: Derek Redfern
 *
 */

// Module imports
var dotenv = require('dotenv');
var express = require('express');
// var pages = require('./routes/pages');
var app = express();

// Load the environment variables from the .env file
dotenv.load();

// Jade is our default rendering engine; use public for static files
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.locals.pretty = true; // prettify HTML

// HTTP endpoints

app.get("/",function(req,res){
    res.render("home");
});

app.get("/work",function(req,res){
    res.render("work");
});

app.get("/courses",function(req,res){
    res.render("courses");
});

app.get("/projects",function(req,res){
    res.render("projects");
});

app.get("/adventures",function(req,res){
    res.render("adventures");
});

app.get("/contact",function(req,res){
    res.render("contact");
});

app.get("/ee-proto-lab-2",function(req,res){
    res.sendfile("files/lab2.pdf");
});


// Get the server up and running!
var server = app.listen(process.env.PORT, function() {
    console.log('Listening on port %d', server.address().port);
});
