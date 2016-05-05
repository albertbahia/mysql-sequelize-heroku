var express = require('express');
var sequelize = require('sequelize');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

// Initiate Express app
var app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

// Setup Handlebars with Express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Define Node port
var PORT = process.env.PORT || 8000;

app.get('/', function(request, response) {


  response.render('home', {yerp: 'Hello World2!'});
});

app.listen(PORT, function(err) {
  console.log('Listening on port ' + PORT);
})
