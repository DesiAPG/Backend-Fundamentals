const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUserName: process.env.DB_USERNAME,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD,
};

module.exports = config;
