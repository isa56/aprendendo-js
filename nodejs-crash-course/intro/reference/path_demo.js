const path = require('path');

// basename: pega o nome do arquivo
console.log(path.basename(__filename));

// dirname: pega o diretório
console.log(path.dirname(__filename));

// extname: pega a extensão do arquivo
console.log(path.extname(__filename));

// parse: cria objeto path
console.log(path.parse(__filename));

// join: concatena paths
console.log(path.join(__dirname, 'test', 'hello.html'));

// resolve: resolve paths
console.log(path.resolve(__dirname, 'test', 'hello.html'));