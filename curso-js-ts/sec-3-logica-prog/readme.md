# Seção 3 - Lógica de Programação:

## Avaliação de Curto Circuito:

- Em `&&`, se o primeiro valor for `false`, o segundo não é avaliado pois o resultado final é `false`;
- Já para `||`, se o primeiro valor for `true`, o segundo não é avaliado pois o resultado final é `true`.

- && -> Todas as expressões devem ser verdadeiras para que a expressão retorne o valor verdadeiro (se houver um valor falso, ela retorna *o valor* falso:).
  - `console.log('Teste' && 0 && 3);` -> resulta em 0.
- || -> Todas as expressões devem ser falsas para que a expressão retorne falso.
  - 

\* **Valores que são avaliados em falso quando necessário: (Falsy)**
- `0`;
- `''`;
- `null`;
- `undefined`;
- `NaN`;

  \* Todos os outros valores retornam "verdadeiro" **Truthy**.

Exemplo de utilização:

```javascript
function falaOi() { return 'Oi'; }

const naoVaiExecutar;

console.log(naoVaiExecutar && falaOi()); // undefined

const vaiExecutar = 'a';

console.log(vaiExecutar && falaOi()); // 'Oi'

//////

const corUsuario1 = null;
const corUsuario2 = 'azul';
const corSelecionada1 = corUsuario1 || 'preto';
const corSelecionada2 = corUsuario2 || 'preto';
console.log(corSelecionada1); // preto
console.log(corSelecionada2); // azul

```

---

## Objeto `Date`:

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date).

```javascript
const currentDate = new Date();  // data atual
const marcoZero = new Date(0);  // data inicial do unix: 01/01/1970 (usar negativo para datas anteriores).

console.log(currentDate.toString(), marcoZero.toString());

const date = new Date(2019, 3, 20, 15, 14, 27, 500);  // ano, mês, dia, hora, minuto, segundo, milissegundo -> mês começa do 0 (Jan) a 11 (Dez)
console.log(date.toString());
const dateString = new Date("2022-07-18 10:36:24.100"); 
console.log(dateString.getDate());  // retorna dia do mês
console.log(dateString.getMonth());
console.log(dateString.getFullYear());
console.log(dateString.getHours());
console.log(dateString.getMinutes());
console.log(dateString.getSeconds());
console.log(dateString.getMilliseconds());
console.log(dateString.getDay()); // dia da semana (0 - Dom e 6 - Sáb)

function addZeroToTheLeft(number) {
  return number < 10 ? `0${number}` : number;
}

function formatDateToPtBr(date) {
  const weekDate = date.getDay() + 1;
  let weekDateName;

  switch(weekDate) {
    case 1:
      weekDateName = 'Domingo';
      break;
    case 2:
      weekDateName = 'Segunda';
      break;
    case 3:
      weekDateName = 'Terça';
      break;
    case 4:
      weekDateName = 'Quarta';
      break;
    case 5:
      weekDateName = 'Quinta';
      break;
    case 6:
      weekDateName = 'Sexta';
      break;
    case 7:
      weekDateName = 'Sábado';
      break;
  }

  const day = addZeroToTheLeft(date.getDate());
  const month = addZeroToTheLeft(date.getMonth() + 1);
  const year = date.getFullYear();

  const hour = addZeroToTheLeft(date.getHours());
  const minutes = addZeroToTheLeft(date.getMinutes());
  const seconds = addZeroToTheLeft(date.getSeconds());
  const milliseconds = addZeroToTheLeft(date.getMilliseconds());


  return `${weekDateName} - ${day}/${month}/${year} - ${hour}:${minutes}:${seconds}.${milliseconds}`;
}

console.log(formatDateToPtBr(currentDate));

```

## Var vs Let vs Const:

- `var` tem escopo de função;
- `let` tem escopo de bloco ` { bloco } `;




