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
