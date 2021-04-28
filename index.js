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

//Route Parameter
app.get("/usuarios/:idade", (req, res) => {
  const { idade } = req.params;
  const usuario = usuarios.find((usuarios) => usuarios.idade == idade);
  if (usuario) {
    res.status(200).send(usuario);
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
});

//Query
app.get("/usuarios", (req, res) => {
  console.log(req.query);
  const { idade } = req.query;
  const usuario = usuarios.find((usuarios) => usuarios.idade == idade);
  if (usuario) {
    res.status(200).send(usuario);
  } else {
    res.status(404).send("Usuário não encontrado.");
  }
});

app.listen(3000, () => {
  console.log("Servidor está sendo executado na porta 3000");
});
