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


## Getters e Setters



## Métodos úteis


## Prototypes


## Manipulando Prototypes


## Herança


## Polimorfismo


## Factory Functions + Prototypes


## Objeto `Map()`