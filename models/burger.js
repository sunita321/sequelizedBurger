'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', 
  {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }
   
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};