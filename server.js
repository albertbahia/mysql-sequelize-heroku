var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var Todo = require('./models/todo.js');

// Initiate Express app
var app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

// Setup Handlebars with Express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Define node port
var PORT = process.env.PORT || 8000;

// Routes
app.get('/', function(request, response) {
  // Todo.findAll({}).then(function(todos) {
  //   res.render('home', {todos})
  // });
  
  response.render('home', {yerp: 'Hello World2!'});
});

// Node port listener
app.listen(PORT, function(err) {
  console.log('Listening on port ' + PORT);
})
