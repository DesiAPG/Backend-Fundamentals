const express = require("express");
const view = require("../helpers/views.js");
const database = require("../libs/database.js");
const router = express.Router();
const User = require("../models/user");

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
  router.post("/registro", (req, res) => {
    const user = new User(req.body)
    const validation = user.validate()
    if (validation.validated) {
      return res.json(await user.save())
    }
    return res.json(await user.save)
  });
};

module.exports = users;
