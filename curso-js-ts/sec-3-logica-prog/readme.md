# Seção 3 - Lógica de Programação:

## Avaliação de Curto Circuito:

- Em `&&`, se o primeiro valor for `false`, o segundo não é avaliado pois o resultado final é `false`;
- Já para `||`, se o primeiro valor for `true`, o segundo não é avaliado pois o resultado final é `true`.

- && -> Todas as expressões devem ser verdadeiras para que a expressão retorne o valor verdadeiro (se houver um valor falso, ela retorna *o valor* falso:).
  - `console.log('Teste' && 0 && 3);` -> resulta em 0.
- || -> Todas as expressões devem ser falsas para que a expressão retorne falso.
  - 

\* **Valores que são avaliados em falso quando necessário: (Falsy)**
- `0`;
- `''`;
- `null`;
- `undefined`;
- `NaN`;

  \* Todos os outros valores retornam "verdadeiro" **Truthy**.

Exemplo de utilização:

```javascript
function falaOi() { return 'Oi'; }

const naoVaiExecutar;

console.log(naoVaiExecutar && falaOi()); // undefined

const vaiExecutar = 'a';

console.log(vaiExecutar && falaOi()); // 'Oi'

//////

const corUsuario1 = null;
const corUsuario2 = 'azul';
const corSelecionada1 = corUsuario1 || 'preto';
const corSelecionada2 = corUsuario2 || 'preto';
console.log(corSelecionada1); // preto
console.log(corSelecionada2); // azul

```

---

## Objeto `Date`:

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date).

```javascript
const currentDate = new Date();  // data atual
const marcoZero = new Date(0);  // data inicial do unix: 01/01/1970 (usar negativo para datas anteriores).

console.log(currentDate.toString(), marcoZero.toString());

const date = new Date(2019, 3, 20, 15, 14, 27, 500);  // ano, mês, dia, hora, minuto, segundo, milissegundo -> mês começa do 0 (Jan) a 11 (Dez)
console.log(date.toString());
const dateString = new Date("2022-07-18 10:36:24.100"); 
console.log(dateString.getDate());  // retorna dia do mês
console.log(dateString.getMonth());
console.log(dateString.getFullYear());
console.log(dateString.getHours());
console.log(dateString.getMinutes());
console.log(dateString.getSeconds());
console.log(dateString.getMilliseconds());
console.log(dateString.getDay()); // dia da semana (0 - Dom e 6 - Sáb)

function addZeroToTheLeft(number) {
  return number < 10 ? `0${number}` : number;
}

function formatDateToPtBr(date) {
  const weekDate = date.getDay() + 1;
  let weekDateName;

  switch(weekDate) {
    case 1:
      weekDateName = 'Domingo';
      break;
    case 2:
      weekDateName = 'Segunda';
      break;
    case 3:
      weekDateName = 'Terça';
      break;
    case 4:
      weekDateName = 'Quarta';
      break;
    case 5:
      weekDateName = 'Quinta';
      break;
    case 6:
      weekDateName = 'Sexta';
      break;
    case 7:
      weekDateName = 'Sábado';
      break;
  }

  const day = addZeroToTheLeft(date.getDate());
  const month = addZeroToTheLeft(date.getMonth() + 1);
  const year = date.getFullYear();

  const hour = addZeroToTheLeft(date.getHours());
  const minutes = addZeroToTheLeft(date.getMinutes());
  const seconds = addZeroToTheLeft(date.getSeconds());
  const milliseconds = addZeroToTheLeft(date.getMilliseconds());


  return `${weekDateName} - ${day}/${month}/${year} - ${hour}:${minutes}:${seconds}.${milliseconds}`;
}

console.log(formatDateToPtBr(currentDate));

```

## Var vs Let vs Const:

- `var` tem escopo de função e sofre hoisting;
- `let` tem escopo de bloco ` { bloco } ` e não sofre hoisting;

\* **hoisting**: declaração é "elevada" para o topo do escopo, mas atribuição, não.

```javascript	

console.log(varTest); // undefined
console.log(letTest); // ERRO: letTest is not defined

var varTest = 'var';
let letTest = 'let';

```


## Destructuring:

### Arrays:

- Atribuir valores de um array para variáveis separadas, "desestruturando" o array, tirando seus valores e colocando-os em variáveis separadas.

\* Operador: `...` => pegar o resto: *rest operator*

```javascript

let a = 'A', b = 'B', c = 'C';
const letras = [b, c, a];

[a, b, c] = letras;  // atribuição por desestruração

console.log(a, b, c); // 1 2 3

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [first, second, third, , fifth, ...rest] = numeros;

console.log(first, second, fifth, rest); // 1000 2000 5000, [6000, 7000, 8000, 9000]

```


### Objetos:

```javascript	

const person = {
  name: 'João',
  age: 20,
  address: {
    city: 'São Paulo',
    state: 'SP'
  }
}

let { name, age, address: { city, state } } = person;

let { name } = person;
let { name: teste, sobrenome: surname = '' age: idade } = person;

let { name: nome, ...rest } = person;

```


## Estruturas de repetição:

- `for...in`:
[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in).

O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

```JavaScript

const fruits = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];
const person = {
  name: 'Isa',
  surname: 'Ferreira',
  age: 20,
}

for (let index in fruits) {
  console.log(fruits[index]);
}

for (let key in person) {
  console.log(person[key]);
}

```

- `for...of`:
[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of)
O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

```js

const names = ['Isadora', 'Evelyn', 'Davi'];

for(let name of names) {
  console.log(name);
}

```

- `forEach`:
[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
O método forEach() executa uma dada função em cada elemento de um array.

```js

const names = ['Isadora', 'Evelyn', 'Davi'];

names.forEach((name, index) => {
  console.log(`[${index + 1}] - ${name}`);
});

```

## Tratamento e Lançamento de Erros:

- Existem códigos "perigosos", que podem gerar erros. Ex.: conexão com a API não pôde ser estabelecida. Por isso, um dado não pode ser exibido.

- Bloco para testar um código e capturar eventuais erros - `try...catch...finally`:

```js

try {
  // É executada quando não há erros
  console.log(imAVarThatDoesntExist);

  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerei um erro');
  // console.log('Fechei o arquivo');  // Não será executado
} catch (error) {
  // É executada quando há erros
  console.log('Ocorreu um erro: ', error);

  console.log('Tratando o erro'); // Tratei o erro
} finally () {
  // É executada sempre
  console.log('Fechei o arquivo');  // Momento para fechar o arquivo, já que não foi executado no bloco try

}

```

- Pode ser interessante gerar nossos próprios erros, para que possamos tratar de forma específica. Para isso, usamos o `throw`:

- Lançamento de erros - `throw` e a classe `Error`:

```js

function sum(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números');
  }
  return x + y;
}

console.log(sum(1, 2)); // 3
console.log(sum('1', 2)); // Error: x e y precisam ser números

// Corrigindo:

try {
  console.log(sum('1', 2)); // Error: x e y precisam ser números
} catch (err) {
  console.log('Ocorreu um erro :(',);
}

```


<!-- ## Controle de Timers:

- 
 -->

