const path = require("path")
const knex = require('knex');
module.exports = (environment = 'development') => {
    const config = require(path.resolve(__dirname, '../../knexfile.js'))[
      environment
    ];
    const connection = knex(config);
  
    return connection;
  };