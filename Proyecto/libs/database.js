const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  database: "BackendFundamentals",
  password: "D1000239",
});

function query(sql) {
  const miPromesa = new Promise(function (resolve, reject) {
    database.connection.query(sql, function (error, result, fields) {
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

  return miPromesa;
}

module.exports = { connection, query };
