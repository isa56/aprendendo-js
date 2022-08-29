// const HomeModel = require("../models/HomeModel");

// HomeModel.create({
//   title: "Teste",
//   description: "Descrição",
//   id: 1,
// })
//   .then(data => console.log(data))
//   .catch(e => console.log("ERRO ", e));

exports.index = (req, res, next) => {
  // Salvar na session:
  // req.session.user = { name: "Isadora", logged: true };

  // Acessar algo da session:
  // console.log(req.session.user);

  // Salvar mensagens (que se auto-destruirão após serem lidas):
  // req.flash("info", "Olá, seja bem vindo! Info");
  // req.flash("error", "Olá, seja bem vindo! Erro");
  // req.flash("success", "Olá, seja bem vindo! Sucesso");

  // Mostrar as mensagens:
  // console.log(req.flash("info"));
  // console.log(req.flash("error"));
  // console.log(req.flash("success"));

  res.render("index", {
    title: "Título da página",
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    user: { name: "Isa" },
  });
};

exports.formSent = (req, res, next) => {
  console.log(req.session);
  // valores enviados pelo cliente, valores recebidos pelo cliente e enviados pelo servidor
  res.send(
    `${req.params.parameters} |||
    ${req.query.queryParameters} |||
    Você me enviou: ${req.body.nome}`
  );
};
