const path = require("path");

// Módulos Externos
const express = require("express");

const app = express();
const port = 4000;
const users = require("./routes/users");


//Middlewares
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(express.json());

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
