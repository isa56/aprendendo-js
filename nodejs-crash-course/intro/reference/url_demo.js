const url = require("url");

const myUrl = new URL("http://site.com:8000/hello.html?id=100&status=active");

// URL Serializado
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (domínio raiz:porta e sem porta)
console.log(myUrl.host, myUrl.hostname);

// Nome do path do arquivo
console.log(myUrl.pathname);

// Query serializado
console.log(myUrl.seach);

// Objetos parametrizados
console.log(myUrl.searchParams);

// Adicionar parâmetro
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop por parâmetros

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));