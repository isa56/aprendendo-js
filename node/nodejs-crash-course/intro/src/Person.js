class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
};

module.exports = Person;

// Em outro arquivo, importe o módulo:
// const Person = require('./src/Person');
// const person1 = new Person('Isadora', 20);
// person1.greeting();