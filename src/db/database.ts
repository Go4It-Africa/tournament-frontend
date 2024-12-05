import knex from 'knex';
const config = require('../../knexfile');

const db = knex(config['dev']);

export default db;
