
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  // , Facebook = require('facebook-node-sdk')
  , mongoose = require('mongoose')
  , bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser');

var app = express();
mongoose.connect('mongodb://localhost/redfern');
// var models = require('./models/models');
// var Station = models.Station;

app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
app.use(bodyParser());
app.use(cookieParser(process.env.COOKIE_SECRET || "localsecret"));
// app.use(express.session());
// app.use(express.methodOverride());
// app.use(Facebook.middleware({appId: process.env.FB_APPID, secret: process.env.FB_SECRET}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.render('404', { status: 404, url: req.url, title: 'Something went wrong' });
});


app.use(function(err, req, res, next){
  res.render('500', { status: err.status || 500, error: err, title: 'Something went wrong'});
});

server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var scope = {scope: ['']};

app.get('/', function(req,res){res.send("Test Node Instance")});