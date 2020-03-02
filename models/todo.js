'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model=sequelize.Sequelize.Model;

  class Todo extends Model{}

  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE
  }, {sequelize,modelName:'Todo'});


  Todo.associate = function(models) {
    // associations can be defined here
  };

  return Todo;
};