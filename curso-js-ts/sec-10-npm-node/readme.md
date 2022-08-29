# Node, Express, NPM

\* [Documentação do EJS](https://ejs.co/).

## Módulos do Node

- **Exportar** módulos ao adicionar atributos ao objeto `module.exports`: `module.exports.nomeDoAtributo = valorDoAtributo``;
- **Importar** módulos com `require`: `const nomeDoModulo = require('nomeDoModulo')`;

## NPM

- **Instalar** pacotes: `npm install nomeDoPacote`;
- **Instalar** pacotes em determinada versão: `npm install nomeDoPacote@versao -E` -E para salvar a versão no `package.json` e impedir que ela seja atualizada;
- **Instalar** pacotes como **dependências de desenvolvimento**: `npm install nomeDoPacote --save-dev`;
- **Atualizar** pacotes: `npm update`
- **Desinstalar** pacotes: `npm uninstall nomeDoPacote`;
- **Listar** pacotes instalados: `npm list`;
- **Buscar** pacotes **desatualizados**: `npm outdated`;

## Express

### Introdução

- Express ajuda a criar o servidor, assim como a gerenciar rotas, requisições e respostas;
- **Instalar** o Express: `npm install express --save`;
- Importar o Express no arquivo principal da aplicação: `const express = require('express')` e iniciá-lo: `const app = express()`;
- Utilizar o método `app.get()` para definir uma rota: `app.get('/rota', (req, res) => { res.send('Resposta') })`;
- Iniciar o servidor com `node nomeDoArquivoDeEntrada.js` e abrir em `localhost:porta` no navegador (porta definida no código);

### Usando `nodemon`

- Instalar o `nodemon` globalmente: `npm install nodemon --save-dev`;
- Criar script no `package.json` para iniciar o servidor com o `nodemon`: `"start": "nodemon nomeDoArquivoDeEntrada.js"`;

### Parâmetros de rota

- **Url Params**: vem depois da rota (`req.params`): `app.get('/rota/:parametro', (req, res) => { res.send(req.params) })`;

- **Url Query**: vem depois da rota e é separado por `?` (`req.query`): `app.get('/rota', (req, res) => { res.send(req.query) })`;

- **Body** da requisição: vem no corpo da requisição (`req.body`): `app.post('/rota', (req, res) => { res.send(req.body) })`;
