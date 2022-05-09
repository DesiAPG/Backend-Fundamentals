const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  database: "BackendFundamentals",
  password: "D1000239",
});

module.exports = { connection };
