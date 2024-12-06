const knex = require('knex');

const config = require('../../knexfile');

const db = knex(config['development']);

//export default db;
module.exports = db;
