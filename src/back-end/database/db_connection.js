const { pool } = require('./db_configuration');

const connection = await pool.connect;
