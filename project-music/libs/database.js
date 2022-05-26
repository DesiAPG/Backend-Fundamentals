const mysql = require("mysql2");
const { dbHost, dbPort, dbUserName, dbName, dbPassword } = require("../config");

const connection = mysql.createConnection({
  host: dbHost,
  port: dbPort,
  user: dbUserName,
  database: dbName,
  password: dbPassword,
});

function query(sql) {
  return new Promise(function (resolve, reject) {
    connection.query(sql, function (error, result, fields) {
      if (error != null) {
        console.log(error);

        return reject({
          error: true,
          message: error.sqlMessage,
        });
      } else {
        return resolve(result);
      }
    });
  });
}

module.exports = { connection, query };
