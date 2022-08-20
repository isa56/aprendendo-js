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


- Funções que são passadas como argumento para outras funções, para serem chamadas depois, em algum momento da execução da função que recebeu a função de callback;
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function);
- [Artigo](https://www.freecodecamp.org/portuguese/news/funcoes-de-callback-em-javascript-o-que-sao-e-como-usa-las/)

\* [Arquivo de exemplo](/curso-js-ts/sec-4-funcoes/callback.js);

## Funções Imediatas / Funções Auto Invocadas - IIFE (Immediately Invoked Function Expression)

[Documentação](https://developer.mozilla.org/pt-BR/docs/Glossary/IIFE)

- Funções que são executadas imediatamente após serem definidas;
- Definir uma função para esconder seus dados do escopo global ao invés de colocá-los diretamente no escopo global;

```js

(function () {  // Função anônima auto invocada
  // Escopo do meu app
  const nome = 'Isa';
  console.log(nome);
})();

console.log("Aqui seria o escopo global");

```


## Funções Fábrica (Factory Functions)

- Funções que retornam objetos;
- Funções dentro de objetos são chamadas métodos;
- [Uso da palavras `this`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this): definir o escopo do atributo/método como o objeto => sempre procura nos atributos de quem o chamou;
  - Arrow functions não funcionam com o `this` e sempre apontam para o escopo global;
- Utilizando a palavra reservada `get`, podemos tornar métodos acessíveis como atributos;
- Utilizando a palavra reservada `set`, podemos alterar atributos do objeto;

- [Artigo Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern);
- [JavaScript Tutorial](https://www.javascripttutorial.net/javascript-factory-functions/);

\* [Arquivo de exemplo](/curso-js-ts/sec-4-funcoes/factory.js);


## Funções Construtoras (Constructor Functions)

- Funções que retornam objetos (geralmente relacionada a classes): funciona como um molde pra objetos;
- 

```js

function Person(firstName, lastName) {
  const id = '123456';
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  }
  const internalMethod = function () {
    console.log("Internal method");
  }
}

```

## Funções Recursivas

- Funções que se chamam;

```js
function calculateFactorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}

calculateFactorial(10);
```

## Funções Geradoras (Generators)

- Funções que podem ser pausadas e retomadas em qualquer momento;
- Usa lazy evaluation;

- [Documentação da função](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*);
- [Documentação do Objeto](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generator);

```js	

function* generator1() {
  yield 'Valor 1';
  yield 'Valor 2';
  yield 'Valor 3';
}

const g1 = generator1();

console.log(g1.next(), g1.next().value);
console.log(g1.next(), g1.next().value);
console.log(g1.next(), g1.next().value);

function* generator2() {
  let i = 0;
  while(true) {
    yield i;
    i++;
  }
}

const g2 = generator2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
// Infinito...

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator4() {
  yield* generator3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generator4();

for(let value of g4) {
  console.log(value);
}

function* generator5() {
  yield function() {
    console.log('came from y1');
  }

  yield function() {
    console.log('came from y2');
  }
}

const g5 = generator5();
const f1g5 = g5().next().value();
const f2g5 = g5().next().value();

f1g5();
f2g5();

```
