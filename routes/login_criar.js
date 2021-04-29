const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { nome } = req.body;
  res.status(200).send("OK L");
});

router.post("/criar", (req, res) => {
  res.status(200).send("OK Criar");
});

module.exports = router;
