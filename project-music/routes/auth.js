const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  return res.render("login", {
    username: "Desire",
    lista: ["María", "Miguel", "Emilio"],
    id: 123,
  });
});

module.exports = router;
