const express = require("express");
const { port } = require("./config");
const app = express();

// Router
const auth = require("./routes/auth");

// Pug Config
app.set("view engine", "pug");
app.set("views", "views");

app.use(auth);

app.get("/", (req, res) => {
  res.json({
    hola: "hello world",
  });
});

app.listen(port, () => {
  console.log("listening on port 4000");
});
