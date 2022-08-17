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

## 


