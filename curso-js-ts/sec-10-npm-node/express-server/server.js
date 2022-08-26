const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // valores enviados pelo cliente, valores recebidos pelo cliente e enviados pelo servidor
  res.send(`Hello World!`);
});

app.get("/contato", (req, res) => {
  res.send(`
  <form method="POST" action="/teste">
  Nome: <input type="text" name="nome">
  <button type="submit">Enviar</button>
  </form>
  `);
});

app.post("/teste", (req, res) => {
  res.send(req.body.nome);
});

app.get("/teste/:parameters?", (req, res) => {
  // valores enviados pelo cliente, valores recebidos pelo cliente e enviados pelo servidor
  res.send(
    `${req.params.parameters} |||
    ${req.query.queryParameters} |||
    Você me enviou: ${req.body.nome}`
  );
});

app.listen(3000);
