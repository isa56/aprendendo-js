// EXERCICIO 1 (AULA 44):
/*
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let message = "Seu IMC é ";
  let color = "#fa8072";
  const messageCtn = document.querySelector("#imc-result");
  const weight = parseFloat(document.querySelector("#weightInpt").value);
  const height = parseFloat(document.querySelector("#heightInpt").value);

  if (!weight && !height) {
    message = "Preencha todos os campos";
  } else if ((!weight || typeof weight !== "number") && height) {
    message = "Digite um peso válido";
  } else if (weight && (!height || typeof height !== "number")) {
    message = "Digite uma altura válida";
  } else {
    const imc = weight / height ** 2;
    message += imc.toFixed(2) + "(" + findIMCMessage(imc) + ")";
    color = "#00FFFF";
  }

  messageCtn.textContent = message;
  messageCtn.style.backgroundColor = color;
});

findIMCMessage = (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso ideal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else if (imc < 35) {
    return "Obesidade grau I";
  } else if (imc < 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }
};
*/

// EXERCICIO 2 (AULA 48):

// const options = { dateStyle: 'full', timeStyle: 'short' };
// document.querySelector(".container h1").textContent = new Date().toLocaleDateString('pt-BR', options);

// OU

// function addZeroToTheLeft(number) {
//   return number < 10 ? `0${number}` : number;
// }

// function getWeekDateName(weekDay) {
// const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
// return days[weekDay];
// }

// function getMonthName(month) {
//   switch (month) {
//     case 0:
//       return "Janeiro";
//     case 1:
//       return "Fevereiro";
//     case 2:
//       return "Março";
//     case 3:
//       return "Abril";
//     case 4:
//       return "Maio";
//     case 5:
//       return "Junho";
//     case 6:
//       return "Julho";
//     case 7:
//       return "Agosto";
//     case 8:
//       return "Setembro";
//     case 9:
//       return "Outubro";
//     case 10:
//       return "Novembro";
//     case 11:
//       return "Dezembro";
//   }
// }

// function formatDateToPtBr(date) {
//   const weekDateName = getWeekDateName(date.getDay());

//   const day = addZeroToTheLeft(date.getDate());
//   let monthName = getMonthName(date.getMonth());

//   const year = date.getFullYear();

//   const hour = addZeroToTheLeft(date.getHours());
//   const minutes = addZeroToTheLeft(date.getMinutes());

//   return `${weekDateName}, ${day} de ${monthName} de ${year} ${hour}:${minutes}`;
// }

// function calculateShowTime() {
//   const showTime = formatDateToPtBr(new Date());

//   document.querySelector(".container h1").textContent = showTime;
// }

// calculateShowTime();

// EXERCICIO 3 (AULA 53):

/*
const elements = [
  { tag: "p", text: "Frase 1" },
  { tag: "div", text: "Frase 2" },
  { tag: "footer", text: "Frase 3" },
  { tag: "section", text: "Frase 4" },
];

const nodeFather = document.querySelector(".container");

for (let i = 0; i < elements.length; i++) {
  const { tag, text } = elements[i];
  const el = document.createElement(tag);
  el.textContent = text;
  nodeFather.appendChild(el);
}
*/

// EXERCICIO 4 (AULA 57):
/*
const paragraphsContainer = document.querySelector(".paragraphs");

const paragraphs = paragraphsContainer.querySelectorAll("p");

const stylesBody = getComputedStyle(document.body);

for (let p of paragraphs) {
  p.style.backgroundColor = stylesBody.backgroundColor;
  p.style.color = "white";
}
*/

// EXERCICIOS 5 (AULA 60~62):

/*
// A) Função que recebe 2 nums e retorna o maior deles

const getBiggestNumber = (a = 0, b = 0) => (a > b ? a : b);

console.log(getBiggestNumber(15, 16));

// B) Função que recebe largura e altura de uma imagem (number) e retorna se a imagem é paisagem ou não (boolean)

const isLandscape = (width = 0, height = 0) => width > height;

console.log(isLandscape(1920, 1080));
console.log(isLandscape(1080, 1920));

// C) Função que recebe num. Se for divisível por 3, retorna 'Fizz'. Por 5, retorna 'Buzz'. Por 3 e 5, retorna 'FizzBuzz'. Por nada, retorna o próprio num.

const fizzBuzz = (num = 0) => {
  if (typeof num !== "number" || num < 0 || num > 100) {
    console.log("Erro: Digite um número entre 0 e 100");
    return;
  }

  let fizzbuzz = "";

  if (num % 3 === 0) fizzbuzz += "Fizz";
  if (num % 5 === 0) fizzbuzz += "Buzz";
  return fizzbuzz || num;
};

console.log(fizzBuzz(15));
console.log(fizzBuzz(9));
console.log(fizzBuzz(25));
console.log(fizzBuzz(7));
console.log(fizzBuzz("cem"));
*/

