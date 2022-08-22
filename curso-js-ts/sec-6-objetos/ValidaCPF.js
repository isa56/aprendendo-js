// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressiveCounter = cpfArray.length + 1;

  // reduz o array no valor dos ultimos digito:
  const total = cpfArray.reduce((accumulator, currentValue) => {
    accumulator += regressiveCounter * Number(currentValue); // soma ao acumulador o peso do número do cpf
    regressiveCounter--; // decrementa contador regressivo
    return accumulator;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined" || this.cpfLimpo.length !== 11 || this.isSequencia()) return false;

  let partialCPF = this.cpfLimpo.slice(0, -2);
  let digit1 = this.criaDigito(partialCPF);
  partialCPF = partialCPF + digit1;
  let digit2 = this.criaDigito(partialCPF);
  partialCPF = partialCPF + digit2;

  return this.cpfLimpo === partialCPF;
};


const cpf = new ValidaCPF("070.987.720-03");

if (cpf.valida()) {
  console.log("Cpf válido");
} else {
  console.log("Cpf inválido");
}
