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
app.use(users);

// Ruta Principal ('/')
app.get("/", function (req, res) {
  console.log(__dirname); // Ubicación o ruta de nuestro proyecto
  return res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Puerto de escucha
app.listen(port, () => {
  console.log("Listening on port " + port);
});
