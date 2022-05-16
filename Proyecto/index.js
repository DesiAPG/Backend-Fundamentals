const path = require("path");

// Módulos Externos
const express = require("express");
const port = 4000;
const users = require("./routes/users");
const app = express();
const exphbs = require("express-handlebars");

//Handlebars
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views") + "layouts"),
    partialsDir: path.join(app.get("views") + "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", "handlebars");

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
