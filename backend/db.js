const { Pool } = require('pg');
require('dotenv').config();

// The Pool uses the variables from your .env file
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// A simple test to confirm the connection works
pool.on('connect', () => {
  console.log('✅ Connected to the PostgreSQL database');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};