# Seção 7 - Classes e Programação Orientada a Objetos

## Criando Classes

- Syntax Sugar para simplificar a Orientação a Objetos.

```js

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`);
  }

  eat(food) {
    console.log(`${this.name} está comendo ${food}.`);
  }
}

const person = new Person('Isadora', 20);
console.log(person);
person.sayHello();

```

## Getters e Setters

- Getters e Setters são métodos que permitem acessar e modificar propriedades (geralmente privadas) de um objeto pertencente a uma classe.


```js

const _speed = Symbol('speed');

class Car {
  constructor(name) {
    this.name = name;
    this[_speed] = 0;
  }

  get speed() {
    return this[_speed];
  }

  set speed(value) {
    if (typeof value !== 'number') return;
    if (value >= 100 || value <= 0) return;
    this[_speed] = value;
  }                     

  speedUp() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  speedDown() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const c1 = new Car('Fusca');
for (let i = 0; i < 200; i++) {
  c1.speedUp();
}

console.log(c1);

```

## Herança

```js

class Electronic {
  constructor(name) {
    this.name = name;
    this._on = false;
  }

  get on() {
    return this._on;
  }

  turnOn() {
    if(this._on) return;
    this._on = true;
  }

  turnOff() {
    if(!this._on) return;
    this._on = false;
  }
}

class Smartphone extends Electronic {
  constructor(name, model, color) {
    super(name);
    this.model = model;
    this.color = color;
    this._batteryCharge = 100;
  }

  turnOn() {
    if(this._on) return;
    if(this.batteryCharge <= 30) {
      console.log('Bateria fraca. Por favor, carregue o celular.');
      return;
    };
    this._on = true;
  }
}

```

## Métodos de instância e estáticos

- Métodos de instância são aqueles que são acessados através de uma instância de uma classe.
- Métodos estáticos são aqueles que são acessados diretamente pela classe.

```js

class RemoteControl {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  increaseVolume() {
    this.volume += 5;
  }

  // Método de instância
  decreaseVolume() {
    this.volume -= 5;
  }

  // Método estático
  static turnOnTv() {
    console.log('Ligando a TV...');
  }

  // Método estático
  static turnOffTv() {
    console.log('Desligando a TV...');
  }
}

RemoteControl.turnOnTv(); // usando método estático

const control1 = new RemoteControl('LG');

control1.increaseVolume();
control1.increaseVolume();


console.log(control1);

```
