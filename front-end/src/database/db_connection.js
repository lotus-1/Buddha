const { Pool } = require('pg');

const url = require('url');
require('dotenv').config();

let dbUrl = process.env.DB_URL;

if (process.env.NODE_ENV === "test") {
  dbUrl = process.env.TEST_DB_URL;
}
if (!dbUrl) throw new Error("Enviroment variable DB_URL must be set");

const params = url.parse(dbUrl);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 10,
  user: username,
  password: password
};

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);
