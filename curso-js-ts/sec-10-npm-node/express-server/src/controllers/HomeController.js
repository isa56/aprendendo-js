exports.index = (req, res) => {
  res.render('index')
};

exports.formSent = (req, res) => {
  // valores enviados pelo cliente, valores recebidos pelo cliente e enviados pelo servidor
  res.send(
    `${req.params.parameters} |||
    ${req.query.queryParameters} |||
    Você me enviou: ${req.body.nome}`
  );
}; 
