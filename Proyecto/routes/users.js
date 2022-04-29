const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({
    ruta: "users",
  });
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
