# Objetos e Prototypes (Avançado)

## Revisão


```js

const person = {
  name: 'Isadora',
  lastName: 'Ferreira',
  age: 20,
  'graduation course': 'Computer Science',
  sayName: function() {
    return (`My name is ${this.name} ${this.lastName}`);
  },
  getBirthYear: function() {
    return ((new Date().getFullYear()) - this.age);
  }
};

console.log(person);
console.log(person.name);
console.log(person['lastName']);
console.log(person['graduation course']);

const anotherPerson = new Object();
anotherPerson.name = 'Isadora';
anotherPerson.lastName = 'Ferreira';
console.log(anotherPerson);

delete anotherPerson.name;
console.log(anotherPerson);

person.sayName();

for (let key in person) {
  console.log(key, person[key]);
}

// Factory Functions / Constructor Functions / Classes

function createPerson(name, lastName) {
  return {
    name,
    lastName,
    getFullName: function() {
      return `${this.name} ${this.lastName}`;
    }
  }
}

const p1 = createPerson('Isadora', 'Ferreira');
console.log(p1);

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.getFullName = function() {
    return `${this.name} ${this.lastName}`;
  }
}

const p2 = new Person('Isadora', 'Ferreira');
console.log(p2);

```

## `Object.defineProperty()` e `Object.defineProperties()`

- Existe um método `Object.freeze(obj)`, que congela um objeto, ou seja, não permite que ele seja alterado. Ele é útil para evitar que um objeto seja alterado por engano;
- É possível definir propriedades de um objeto de forma mais detalhada utilizando o método `Object.defineProperty()` e `Object.defineProperties()`;
- [Documentação Object.defineProperty()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)  |||   [Documentação Object.defineProperties()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)


```js

function Product (name, price, quantity) {
  this.name = name;
  this.price = price;
  // this.quantity = quantity;

  Object.defineProperty(this, 'quantity', {
    enumerable: true, // mostra a chave
    value: quantity, // valor
    writable: false, // pode alterar?
    configurable: false // configurável? (alterar dado)
  });

  Object.defineProperties(this, {
    totalValue: {
      enumerable: true,
      configurable: false,
      get: function() {
        return this.price * this.quantity;
      }
    },
    id: {
      enumerable: false,
      configurable: false,
      get: () => {
        return Math.random().toString(36).substr(2, 9);
      }
    }
  });
}

const p1 = new Product('Camiseta', 20, 3);
console.log(p1);

```

## Getters e Setters

- Métodos para proteger os valores possíveis para atributos;
- [Documentação Getters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get)   |||   [Documentação Setters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/set)

```js

function Product(name, price) {

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      configurable: false,
      get: function() {
        return name;
      },
      set: () => {
        throw new Error('Não é possível alterar o nome do produto');
      }
    },
    price: {
      enumerable: true,
      configurable: false,
      get: function() {
        return price;
      },
      set: function(value) {
        if (typeof value !== 'number' || value < 0) {
          throw new Error('Invalid price');
        }
        price = value;
      }
    }
  })

}

```

## Métodos úteis

- `Object.keys(obj)`: retorna um array com as chaves do objeto;
- `Object.values(obj)`: retorna um array com os valores do objeto;
- `Object.entries(obj)`: retorna um array com os pares chave/valor do objeto;
- `Object.getOwnProperyDescriptor(obj, prop)`: retorna as configurações de uma propriedade;
- `Object.assign()`: copia as propriedades de um ou mais objetos para um objeto destino;
- `...`: spread operator, copia as propriedades de um objeto para outro;

```js
const prod1 = {name: 'Camiseta', price: 20};
const anotherProd = { ...prod1 };

const anotherProd2 = Object.assign({}, prod1, { material: 'cotton' });
Object.defineProperty(anotherProd2, 'name', {
  writable: false,
  configurable: false
});


anotherProd.name = 'Caneca';
anotherProd.price = '2';

console.log(prod1);
console.log(anotherProd);
console.log(anotherProd2);
console.log(Object.getOwnProperyDescriptor(anotherProd2, 'name'));


```

## Prototypes

[Documentação](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes):
- Todos os objetos tem uma referência interna para um protótipo (`__proto__`), vem da propriedade *prototype* da função construtora que foi usada para criá-lo;
  - Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (`null`), até encontrar (ou não) tal membro;

- Todo objeto possui um prototype, que é um outro objeto ("pai"?) do objeto;


```js

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return `${this.name} ${this.lastName}`;
}

const p1 = new Person('Isadora', 'Ferreira');
console.log(p1);


```

\** **TODO**: Revisar

## Herança

- Forma de diminuir repetição de código ao criar modelos mais genéricos e objetos mais específicos;
- Características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente).

[Documentação](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Inheritance):
[Documentação](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)

```js	

function Product(name, price) {
  this.name = name;
  this.price = price;
};

Product.prototype.discount = function(percent) {
  this.price = this.price - (this.price * (percent / 100));
};

Product.prototype.increase = function(percent) {
  this.price = this.price + (this.price * (percent / 100));
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
};

Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;

const product1 = new Product('Teste', 100);
const shirt1 = new Shirt('Regata', 7.5, 'Preta');

shirt1.increse(50);

console.log(product1);
console.log(shirt1);

function Cup(name, price, material, quantity) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, 'quantity', {
    get: () => quantity,
    set: (value) => {
      if (typeof value !== 'number') return;
      quantity = value
    },
});
};

Cup.prototype = Object.create(Product.prototype);
Cup.prototype.constructor = Cup;

const cup1 = new Cup('Caneca', 15, 'Vidro');

console.log(cup1);


```

## Polimorfismo


## Factory Functions + Prototypes


## Objeto `Map()`