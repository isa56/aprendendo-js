// Aula 8:
/*
var name8 = "Isadora";
var time8 = 13;

console.log(
  'Meu nome é "',
  name8,
  '". Estou aprendendo JavaScript às ',
  time8,
  " da manhã."
);
*/

// Aula 16:
/*
const name16 = "Isadora",
  surname16 = "Gonçalves Ferreira",
  age16 = 20,
  weightKg16 = 85,
  heightMeters16 = 1.67;

let imc16 = weightKg16 / Math.pow(heightMeters16, 2);
let birthYear16 = 2022 - age16;

console.log(`${name16} ${surname16} tem ${age16} anos, pesa ${weightKg16} kg.\nTem ${heightMeters16.toFixed(2)} e seu IMC é de ${imc16}.\n${name16} nasceu em ${birthYear16}.`);
*/

// Aula 23:
/*
let valorA = 'A';
let valorB = 'B';
let valorC = 'C';

let aux = valorA;
valorA = valorB;
valorB = valorC;
valorC = aux;

console.log(valorA, valorB, valorC);
*/

// Aula 25 (/perguntas.html):

// Aula 28:

/*
const num = Number(prompt("Digite um número: "));

document.getElementById("chosenNum").innerHTML = num;

document.getElementById("squareRoot").innerHTML = num ** 0.5;

document.getElementById("num").innerHTML = num;

document.getElementById("isInteger").innerHTML = (Number.isInteger(num));

document.getElementById("isNan").innerHTML = (Number.isNaN(num));

document.getElementById("numFloored").innerHTML = Math.floor(num);

document.getElementById("numCeiled").innerHTML = Math.ceil(num);

document.getElementById("decimalNum").innerHTML = (num.toFixed(2));
*/


// Aula 34:

const people = [];
document.querySelector("form").addEventListener("submit", sendForm);

function sendForm(e) {
  e.preventDefault();
  console.log("teste");
  const name = document.querySelector("#name").value;
  console.log(name);
  const surname = document.querySelector("#surname").value;
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;

  people.push({name, surname, weight, height}); 

  let str = "";

  for (let i = 0; i < people.length; i++) {
    str += `<li>${people[i].name} ${people[i].surname} ${people[i].weight} ${people[i].height}</li>`;
  }

  document.querySelector("#list").innerHTML = str;

}

