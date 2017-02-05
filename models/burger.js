'use strict';
module.exports = function(sequelize, DataType) 
{
  var burgers = sequelize.define('burgers', 
  {
    burger_name: DataType.STRING,
    devoured: DataType.BOOLEAN,
    devourerId: DataType.INTEGER
  }, 
  {
    classMethods: 
    {
      associate: function(models) 
      {

        burgers.hasOne(models.devourers)
      }
    }
  });
  return burgers;
};