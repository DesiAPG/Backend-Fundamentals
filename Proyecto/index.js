const path = require("path");

// Módulos Externos
const express = require("express");

const app = express();
const port = 4000;
const users = require("./routes/users");
const create  = require("express-handlebars");
const hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaulLayout: "main",
  extname: ".hbs",
});

//Handlebars
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Rutas importadas
users(app);

// Ruta Principal ('/')
app.get("/", (req, res) => {
  return res.render("index");
});

// Puerto de escucha
app.listen(port, () => {
  console.log("Listening on port " + port);
});
