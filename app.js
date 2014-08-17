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

// Get the server up and running!
var server = app.listen(process.env.PORT, function() {
    console.log('Listening on port %d', server.address().port);
});
