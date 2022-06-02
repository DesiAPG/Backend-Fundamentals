const express = require("express");
const { getLoginForm } = require("../controllers/auth");
const AuthController = require("../controllers/auth");

const router = express.Router();

router.get("/login", (req, res) => {
  return res.render("login", getLoginForm);
});

router.post("/login", AuthController.login);

module.exports = router;
