const express = require("express");
const database = require("../libs/database.js");
const router = express.Router();

const users = (router) => {
  router.get("/users", (req, res) => {
    database.connection.query(
      "SELECT * FROM USERS",
      (error, result, fields) => {
        if (error) {
          res.json({
            message: error.sqlMessage,
          });
        }
        res.json(result);
      }
    );
  });
  router.get("/login", (req, res) => {
    res.json({
      ruta: "login",
    });
  });

  router.get("/registro", (req, res) => {
    res.json({
      ruta: "users",
    });
  });
};

module.exports = users;
