// Tipos

  // Definidos: Números, Strings, Booleans
    // Números especiais: Infinity, -Infinity e NaN
    // Strings com '', "", ``, concatenação com +

  // Indefinidos: null (valor nulo, geralmente é atribuído), undefined (valor padrão para algo não inicializado/indefinido)

  // Coerção de Tipo:
  console.log(8 * null) // → 0
  console.log("5" - 1) // → 4
  console.log("5" + 1) // → 51
  console.log("five" * 2) // → NaN
  console.log(false == 0) // → true

// Operadores

  // Unários: typeof, -(exp), !(exp)
  // Aritméticos: +, -, /, *, %, uso de parênteses como na matemática, para alterar precedência.
  // Comparação: >, <, >=, <=, ==, !=, ===, !==
  // Lógicos: &&, ||, !,
  // Ternário: (exp) ? valorAtribuidoVerdadeiro : valorAtribuidoFalso;

// Uso de || e && para definir valores padrão:

console.log(null || "user") // → user
console.log("Karl" || "user") // → Karl

