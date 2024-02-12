const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bbetter',
  password: 'alaylm013',
  port: 5432, 
});

module.exports = pool;
