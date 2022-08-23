# Seção 2:

## Arrays:

```js
const array = [1, 2, 3, 4, 5];

console.log(array);
console.log(array[2]);  // 3

array[2] = 10;
console.log(array[2]);  // 10

array.push(7);  // Adiciona o elemento ao final do array
array.pop();  // Remove o elemento no final do array e retorna
array.unshift(-1);  // Adiciona o elemento ao início do array
array.shift();  // Remove o elemento do início do array e retorna

array.slice(0, 2) // Retorna um novo array com os elementos de 0 (inclusive) a 2 (não inclusive)

console.log(array instanceof Array);

```

\* Alterando o valor do const: para tipos primitivos, o valor nunca mais poderá ser alterado, mas para tipos compostos (array e objetos), o valor pode ser alterado, mas a variável (e seu tipo, por exemplo), não;
\* [JS Data Types](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures).


### Funções: 

```js

function sayHi(name) {
  return `hello, ${name}!`
}

functio sum(x = 1, y = 0) {
  return (x + y);
}

const value = sayHi("Isa");
console.log(value);

let seven = sum(2, 5);
console.log(seven);
seven = sum(0);
console.log(seven);
seven = sum(_, 0);
console.log(seven);

const root =  function(n) { // função anonima
  return Math.sqrt(n);
}

console.log(root(4));

const powerOfTwo = (n) => Math.pow(2, n); // arrow function 

```


## Objetos:

```js

const person1 = {
  name: "Isa",
  age: 20,
  address: {
    city: "Juiz de Fora",
    state: "MG"
  },
  "favorite person in the world": "Eves"
};

function createPerson(name, surname, age) {
  return {
    name,
    surname,
    age,
    tellAboutYourself () {  // this funciona aqui, pois é função anonima
      return `${this.name} ${this.surname} is ${this.age} years old.`;
    },
    sayHi: () => `Hello, I'm ${name} ${surname}`  // this não funciona aqui, pois é arrow function
  }
};

const person2 = createPerson("Eves", "Fernandes", 23);

person2.sayHi();

```


## Valores primitivos e valores por referência:

Atribuição de variáveis:
\* Valores primitivos: são copiados
\* Valores por referência: a variável aponta para o mesmo endereço de memória de outra


```js

let a = "A", b = a;
console.log(a, b);  // A A
a = "Teste";
console.log(a, b); // Teste A

let c = [1, 2, 3], d = c;
console.log(c, d);  // [1, 2, 3] [1, 2, 3]
c = [4, 5, 6];
console.log(c, d);  // [4, 5, 6] [4, 5, 6]
d = [7, 8, 9];
console.log(c, d);  // [7, 8, 9] [7, 8, 9]

```
