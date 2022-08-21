# Arrays (Avançado)

## Revisão

- Arrays são uma estrutura de dados que nos permite armazenar uma coleção de valores. Em JS, seus elementos podem ser de qualquer tipo;
- Arrays são passados por referência;
- 

```JS

const names = ['Isa', 'Davi', 'Eves', 'Isinha'];
// const names = new Array('Isa', 'Davi', 'Eves', 'Isinha');

names[3] = 'Isasão';

console.log(names);
delete names[3];
console.log(names);

const newNames = names; // referencia
newNames.pop(); // remove e retorna o último elemento

console.log(names);
console.log(newNames);

const copyNames = [...names]; // cópia

copyNames.shift();  // remove e retorna o primeiro elemento do array

console.log(names);
console.log(newNames);

names.push('Teste'); // adiciona no final do array
console.log(names);

names.unshift('Teste 2'); // adiciona no início do array
console.log(names);

const newArray = names.slice(1, 3); // retorna um novo array com os elementos do array original entre os índices passados como parâmetro: slice(inicio (inclusive), fim (exclusivo))

const name = 'Isadora Gonçalves Ferreira';
const separatedName = name.split(' '); // separa a string em um array de strings, usando o parâmetro passado como separador
const createdName = separatedName.join(' '); // junta os elementos do array em uma string, usando o parâmetro passado como separador

console.log(name, separatedName, createdName);

```


## Método `splice`

- É um método que nos permite adicionar e remover elementos de um array. Recebe dois parâmetros obrigatórios: o índice do elemento a ser adicionado/removido e a quantidade de elementos a serem adicionados/removidos.

```JS

const names = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

let removidos = names.splice(4, 1); // índice do elemento, quantos elementos vão ser removidos
console.log(names, removidos);

removidos = names.splice(2, 0, 'Isa', 'Davi'); // índice do elemento, quantos elementos vão ser removidos, elementos a serem adicionados

console.log(names);

```

## Concatenando Arrays

- Juntar valores de arrays;
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).

```JS

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const nums3 = nums1.concat(nums2); // concatena os arrays passados como parâmetro

const nums4 = nums3.concat([7, 8, 9], [10, 11, 12]);

const nums5 = [...nums1, ...nums2, ...[7, 8, 9]]; // spread operator para fazer a concatenação

console.log(nums3, nums4, nums5);

```

## Filtrando arrays - `filter`

- Filtra os elementos de um array de acordo com uma condição;
- **Não edita o array original**;
- Recebe como parametro uma função callback, que recebe valor atual da iteração, índice e o array;
- O tamanho do array retornado é menor ou igual ao do original.
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).


```JS

// retorne os numeros maiores que 10
const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(value, index, array) {
  console.log(value, index, array);
  return value > 10;
}

const biggerThan10 = numbers.filter((value) => (value > 10));

console.log(numbers, biggerThan10);

```


## Mapeando arrays - `map`

- Mapeia os elementos de um array de acordo com uma condição;
- **Edita o array original**;
- Recebe como parametro uma função callback, que recebe valor atual da iteração, índice e o array;
- O tamanho do array retornado é igual ao do original.
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

```JS

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// numbers.map((value, index, array) => {
//   console.log(value, index, array);
//   return value * 2;
// });

numbers.map((value) => value * 2);

console.log(numbers);

const people = [{name: 'Isa', age: 25}, {name: 'Davi', age: 2}, {name: 'Eves', age: 1}, {name: 'Isinha', age: 0}, {name: 'Isasão', age: 0}];

const peopleWithIds = people.map(person => {
  const newPerson = {...person};
  newPerson.id = Math.random();
  return newPerson;
});

console.log(people);
console.log(peopleWithIds);

```

## Reduzindo arrays - `reduce`

- Reduz os elementos de um array de acordo com uma condição => gera um valor (acumulador) que é retornado;
- Recebe como parametros uma função callback (que recebe um acumulador, valor da iteração, o seu índice e o array) e um valor inicial para o acumulador;
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

```JS

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const sum = numbers.reduce((accumulator, value) =>  {
  accumulator += value
  return accumulator;
}, 0);

```

### Exercício unindo métodos `filter`, `map` e `reduce`:

1. Retorne a soma do dobro de todos os pares;

```JS

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const sum = numbers
                      .filter(value => value % 2 === 0)
                      .map(value => value * 2)
                      .reduce((accumulator, value) => accumulator + value, 0);

console.log(sum); // 324

```


## Percorrendo Arrays - `forEach`

- Percorre os elementos de um array;
- Recebe como parametro uma função callback, que recebe valor atual da iteração, seu índice e o array;
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach);

```JS

const numbers = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

let total = 0;

numbers.forEach((value, index, array) => {
  console.log(value, index);
  total += value;
});

console.log(total);

```

## Extra: Ordenando arrays - `sort`

- Ordena os elementos de um array de acordo com uma condição (função callback (opcional));
  - Caso não seja passado, o array é ordenado de acordo com o código unicode dos caracteres;
- [Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```JS

var fruit = ['maçãs', 'pêras', 'bananas'];
fruit.sort(); // ['bananas', 'maçãs', 'pêras']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
socres.sort((val, next) => val < next);
// Observe que 10 vem antes do 2, porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.

```