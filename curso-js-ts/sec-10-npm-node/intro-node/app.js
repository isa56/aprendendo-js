const { name } = require('./modules/mod2/mod2');  // chamando módulo próprio
const axios = require('axios'); // chamando modulo de dependencia instalada


axios('https://jsonplaceholder.typicode.com/users').then(res => console.log(res.data)).catch(err => console.log('ERROR', err));

console.log(name);

console.log(__filename);  // mostra o caminho do arquivo
console.log(__dirname);  // mostra o caminho do arquivo sem o nome do arquivo