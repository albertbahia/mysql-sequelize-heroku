var express = require('express');
var mysql = require('mysql');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

// Initiate Express app
var app = express();

// Middleware
app.use(bodyParser.urlencoded({extended: false}));

// Database setup
var Sequelize = require('sequelize');
var connection = new Sequelize('todo_db', 'root', 'hacktheplanet', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306'
});

var Todo = connection.define('todo', {
  description: {
    type: Sequelize.STRING,
    field: 'description',
    allowNull: false
  }
});

// Setup Handlebars with Express
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Define node port
var PORT = process.env.PORT || 8000;

// Routes
app.get('/', function(req, res) {
  Todo.findAll({}).then(function(todos) {
    res.render('home', {todos})
  });
});

app.post('/addTodo', function(req,res) {
  console.log(req.body);
  var description = req.body.description;

  Todo.create({
    description: description
  }).then(function(result) {
    res.redirect('/');
  }).catch(function(err) {
    console.log('Error: ' + err);
  });
});

// Node port listener with database connection while Express server is running
connection.sync().then(function() {
  app.listen(PORT, function(err) {
    console.log('Listening on port ' + PORT);
  });
});
