const express = require("express");
const app = express();

app.use(express.text());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/usuarios", (req, res) => {
  const user = req.body;
  console.log(user);
  res.send("Metodo Post" + user);
});

app.post("/json", (req, res) => {
  const user = req.body;
  console.log(user);
  res.send("Metodo Post" + user);
});

app.put("/", (req, res) => {
  res.send("Metodo Put");
});

app.delete("/", (req, res) => {
  res.send("Metodo Delete");
});

app.listen(4000, () => {
  console.log("Escuchando en el puerto 4000");
});
