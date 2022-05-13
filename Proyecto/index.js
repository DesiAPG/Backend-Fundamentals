const path = require("path");

// Módulos Externos
const express = require("express");
const port = 4000;
const users = require("./routes/users");
const app = express();


// Rutas importadas
users(app);

// Ruta Principal ('/')
app.get("/", (req, res) => {
  
});

// Puerto de escucha
app.listen(port, () => {
  console.log("Listening on port " + port);
});
