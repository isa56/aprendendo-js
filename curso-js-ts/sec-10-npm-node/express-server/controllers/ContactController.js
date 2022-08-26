exports.index = (req, res) => {
  res.send(`
  <form method="POST" action="/contato">
  Nome: <input type="text" name="nome">
  <button type="submit">Enviar</button>
  </form>
  `);
};

exports.formSent = (req, res) => {
  // valores enviados pelo cliente, valores recebidos pelo cliente e enviados pelo servidor
  res.send(
    `${req.params.parameters} |||
    ${req.query.queryParameters} |||
    Você me enviou: ${req.body.nome}`
  );
}; 
