var Sequelize = require('sequelize');
var sequelize = new Sequelize('todo_db', 'root', 'hacktheplanet', {
  host: 'localhost',
  dialect: 'mysql'
});

var Todo = sequelize.define('todo', {
  title: {
    type: Sequelize.STRING,
    field: 'title'
  },
  description: {
    type: Sequelize.STRING,
    field: 'description'
  }
});

module.exports = Todo;
