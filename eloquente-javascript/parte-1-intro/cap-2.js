/*
// Variáveis:
var ten = 10;
console.log(ten * ten);

ten = 12;
console.log(ten);

// Funções alert(), confirm() e prompt() do browser.

// Condicionais:
var valor = true;

if (valor) {
  // se verdadeiro
} else {
  // se falso
}

var num = Number(prompt("Pick a number", "0"));

if (num < 10) alert("Small");
else if (num < 100) alert("Medium");
else alert("Large");

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

// Conversão de tipos: Number(), String(), Boolean()

// Loops:

var number = 0;
while (number <= 12) {
  // chave determina um bloco
  console.log(number);
  number = number + 2;
}

// do { bloco } while(condição);
// for (inicializador; condição; incremento) { bloco };

// Quebrar a execução de um loop: break
// Pular uma etapa da execução de um loop: continue

// Uso de +=, =+, -=, =-, ++ e --

*/

/*
                EXERCÍCIOS DO CAPÍTULO
*/

/*
1. Triângulo com Loop
Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:
#
##
###
####
#####
######
#######
*/

for (let i = 1; i <= 7; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "#";
  }
  console.log(line);
}

/* GABARITO:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/

/*
2. FizzBuzz
Escreva um programa que imprima usando console.log() todos os números de 1 a 100 com duas exceções. Para números divisíveis por 3, imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), imprima Buzz.

Quando o programa estiver funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3 e 5 (e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles).
*/

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

/* GABARITO
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
*/

/*
3. Tabuleiro de Xadrez
Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres. A cada posição da grade existe um espaço ou um caractere "#". Esses caracteres formam um tabuleiro de xadrez.
*/

const size = 8;

let string = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    string += ((i+j) % 2 === 0) ? " " : "#";
  }
  string += "\n";
}
console.log(string);
