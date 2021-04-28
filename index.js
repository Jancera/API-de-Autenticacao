const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.post("/login", (req, res) => {
  res.status(200).send("OK Login");
});

app.post("/criar", (req, res) => {
  res.status(200).send("OK Criar");
});

app.listen(3000, () => {
  console.log("Servidor está sendo executado na porta 3000");
});
