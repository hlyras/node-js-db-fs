// server.js
// load the things we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000);
console.log('cataclysm on localhost:3000');