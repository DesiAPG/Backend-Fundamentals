const path = require("path");
const express = require("express");
const port = 4000;
const app = express();

app.get("/", (req, res) => {
  return res.sendFile();
});

app.listen(port, (req, res) => {
  console.log("Listening on port " + port);
});
