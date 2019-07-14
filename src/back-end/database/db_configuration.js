const { Pool } = require('pg');

const url = require('url');
require('dotenv').config();

let dbUrl = process.env.DB_URL || config.DB_URL;

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL || config.TEST_DB_URL;
}
if (!dbUrl) throw new Error('Enviroment variable DB_URL must be set');

const { hostname, port, pathname, auth} = url.parse(dbUrl);
const [username, password] = params.auth.split(':');

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 10,
  user: username,
  password: password
};

const sslEnabled = ({host}) => host !== 'localhost' || host !== 127.0.0.1;
options.ssl = sslEnabled(options);

module.exports = new Pool(options);
