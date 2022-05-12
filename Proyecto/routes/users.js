const express = require("express");
const database = require("../libs/database.js");
const router = express.Router();

const users = (router) => {
  router.get("/users", async (req, res) => {
    try {
      const data = await database.query("SELECT * FROM USERS");
      console.log(data);
      return res.json(data);
    } catch (error) {
      console.log(error);
    }
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
