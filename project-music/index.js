const express = require("express");
const path = require("path");
const { port } = require("./config");
const app = express();

// Middlewares

app.use(express.static(path.join(__dirname, "static")));

// Router
const auth = require("./routes/auth");

// Pug Config
app.set("view engine", "pug");
app.set("views", "views");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(auth);

app.get("/", (req, res) => {
  res.render("home", {
    username: "desire",
  });
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
