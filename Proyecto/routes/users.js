const express = require("express");
const view = require("../helpers/views");
const database = require("../libs/database");
const User = require("../models/user");

const router = express.Router();

router.get("/users", async function (req, res) {
  try {
    const data = await database.query("SELECT * FROM users");

    return res.json(data);
  } catch (error) {
    return res.json({
      error: true,
      message: "An error ocurred",
    });
  }
});

router.get("/login", function (req, res) {
  res.json({
    ruta: "login",
  });
});
router.get("/signup", function (req, res) {
  return view("signUp.html", res);
});

router.post("/signUp", async function (req, res) {
  const user = new User(req.body);
  const validation = user.validate();

  if (validation.validated) {
    return res.json(await user.save());
  }

  return res.json(validation);
});

router.get("/login", async function (req, res) {
  return view("logIn.html", res);
});
router.post("/inicio_sesion", async function (req, res) {
  const user = new User(req.body);

  const result = await user.login();

  return res.json(result);
});

module.exports = router;
