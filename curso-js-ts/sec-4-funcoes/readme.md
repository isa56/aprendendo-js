# Seção 4 - Funções (Avançado)

## Declaração de Funções

### Funções:

- Utilizando a palavra reservada `function`;
- Sofrem [Hoisting](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting): declaração é elevada ao início do escopo;

```js

sayHi(); // vai funcionar, pois a declaração da função é elevada ao início do escopo

function sayHi() {
  console.log("Hi!");
}

sayHi();  // funciona normalmente

```

### Funções Anônimas

- Funções são [First Class Objects](https://isaaccomputerscience.org/concepts/prog_func_first_class_objects?examBoard=all&stage=all): "Um objeto de primeira classe é um objeto que pode ser tratado como qualquer outro objeto. Um ***objeto de primeira classe*** pode ser **passado como um argumento**, **retornado por uma função** e **atribuído a uma variável**".

```js

const sayMyName = function (name) {
  console.log(`My name is ${name}!`);
};

function executeAnotherFunction(func) {
  func("Dado");
}

executeAnotherFunction(sayMyName);

```

#### Arrow Functions

- Funções anônimas com sintaxe reduzida;
- Não sofre hoisting;
- 

```JS

const arrowFunction = () => {
  console.log("I'm an Arrow Function");
};

```

## Parâmetros e Argumentos de Funções

- Parâmetros: definido na declaração;
- Argumentos: valor que é passado na chamada da função;

- **Para funções declaradas com `function`**: JavaScript cria um objeto `arguments` dentro da função que recebe todos os argumentos passados na chamada da função (esperados ou não);
- Podemos passar menos ou mais argumentos do que os esperados;
- Podemos definir valores padrão caso certos argumentos não sejam passados na chamada da função fazendo `(..., parametro = valorPadrao, ...)`;
- Caso não se deseje enviar um argumento, deve-se utilizar `undefined` em seu lugar;
- É possível fazer `destructuring` de parâmetros array ou objetos;
- Pode-se utilizar o *rest operator* `...` para receber um número indefinido de argumentos;

```js

function fun(parametro1 = "valor padrão 1", parametro2 = "valor padrão 2") {
  console.log(parametro1, parametro2);
}

function fun2() {
  console.log(arguments); // objeto criado
}

function funComDestructuringDeObjeto({nome, idade, endereco}) {
  console.log(nome, idade, endereco);
}

function funComDestructuringDeArray([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

function fazConta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
  return acumulador;
}


fun("argumento1", "argumento2");

fun("argumento1");
fun(undefined, "argumento2");

fun2("argumento1", "argumento2", 1, 2, 3, 4, 5, 6);

funComDestructuringDeObjeto({nome: "Isa", idade: "20", endereco: {rua: "Rua 1", numero: 7}});

funComDestructuringDeArray([1, 5, 12])

```

## Retorno de Funções

- Podemos retornar qualquer tipo de dado, e este valor pode ser atribuído a uma variável;
- Termina a função;

\* [Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures).

```js

function createPerson(name, lastName) {
  return {name, lastName};
}

let p1  = createPerson("Isa", "Ferreira");

function createMultiplicator(multiplicator) {
  return function (n) {
    return n * multiplicator; // closure
  }
}

const duplicate = createMultiplicator(2);
const triplicate = createMultiplicator(3);
const quadruplica = createMultiplicator(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadruplica(2));

```

## Escopo Léxico

- Escopo léxico é o escopo que uma função é declarada;
- A função conhece o local onde foi declarada (variáveis e funções declaradas e definidas anteriormente (incluindo com `let|const`));

\* [Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures).
\* [Artigo no dev.to](https://dev.to/marianaxrp/escopo-lexico-em-javascript-87p).

```js

const nome = 'Isa';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Davi';
  falaNome();
}

usaFalaNome(); // Isa

```

## Closures

- Closure é uma função que "lembra" o seu escopo léxico, mesmo quando a função é executada fora desse escopo léxico;
- "Fecha" um escopo na qual está definida.

\* [Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures).

```js

function retornaFuncao() {
  const nome = 'Isa';
  return function () {
    return nome;
  }
}

function retornaFuncao2(nome) {
  return function () {
    return nome;
  }
}

const fun = retornaFuncao();
console.log(fun);

const fun2 = retornaFuncao2("Isinha");
console.log(fun2);

```

## Funções de Callback



## Funções Imediatas - IIFE (Immediately Invoked Function Expression)


## Funções Fábrica (Factory Functions)



## Funções Construtoras (Constructor Functions)


## Funções Recursivas


## Funções Geradoras (Generators)