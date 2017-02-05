var Sequelize = require('sequelize');

//Use either JAWS for production or dev environment
var env = process.env.JAWSDB_URL || 'development';

var config = require('./config')[env];

//set up sequelize connection
if (config.use_env_variable) 
{
  //var sequelize = new Sequelize(process.env[config.use_env_variable]);
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} 
else 
{
  var sequelize = new Sequelize(config.database, config.username, config.password, 
  	{
		host: config.host,
		dialect: config.dialect
	});
}

module.exports = sequelize;