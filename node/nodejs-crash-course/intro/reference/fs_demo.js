const fs = require("fs");
const path = require("path");

// Criar uma pasta
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) {
    throw err;
  }
  console.log("Pasta criada!");
});
// Síncrono: fs.mkdirSync()

// Criar e escrever em um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "outfile.txt"),
  "Hello World!",
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Arquivo criado!");

    // Fazer append no arquivo (assíncrono)
    fs.appendFile(path.join(__dirname, "/test", "outfile.txt"), "\nNode.js é legal", (err) => {
      if (err) {
        throw err;
      }
      console.log("Arquivo atualizado!");
  });
});


// Ler arquivo:
fs.readFile(path.join(__dirname, "/test/", "outfile.txt"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// Renomear arquivo:
fs.rename(path.join(__dirname, "/test/", "outfile.txt"), path.join(__dirname, "/test/", "newfile.txt"), (err) => {
  if (err) {
    throw err;
  }
  console.log("Arquivo renomeado!");
})
