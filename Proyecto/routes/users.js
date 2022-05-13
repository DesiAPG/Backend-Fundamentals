const express = require("express");
const view = require("../helpers/views.js");
const database = require("../libs/database.js");
const router = express.Router();

const users = (router) => {
  router.get("/users", async (req, res) => {
    try {
      const data = await database.query("SELECT * FROM USERS");
      return res.json(data);
    } catch (error) {
      return res.json({
        error: true,
        message: "An error ocurred try again",
      });
    }
  });
  router.get("/login", (req, res) => {
    res.json({
      ruta: "login",
    });
  });

  router.get("/registro", (req, res) => {
    return view("signUp.html", res);
  });
  router.get("/registro", (req, res) => {
    const body = req.body;
    return res.json(user);
  });
};

module.exports = users;
