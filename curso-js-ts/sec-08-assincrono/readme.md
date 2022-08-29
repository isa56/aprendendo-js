# Seção 8 - JavaScript Assíncrono

## Promises

- Maneira de esperar um dado que pode demorar a ser retornado sem que o programa fique "preso" em determinada tarefa;
- 
[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise);

```js

function waitThere(message, time) {

  return new Promise((resolve, reject) => {

    if (!message) {
      reject('Error: message is undefined');
      return;
    }
    if(!time) {
      reject('Error: time is undefined');
      return;
    }

    setTimeout(() => {
      resolve(message)
    }, time);

  });
}

waitThere('Hello', Math.floor(Math.random() * 1000)).then(res = > console.log(res)).catch(err = > console.log('ERRO!', err));

```

### Métodos úteis

- `Promise.all`: executa todas as promises e retorna um array com os resultados;
- `Promise.race`: executa todas as promises, mas só retorna a primeira a ser finalizada;
- `Promise.resolve`: devolve um resolve para a função;
- `Promise.reject`: devolve um reject;


```js


function waitThere(message, time) {

  return new Promise((resolve, reject) => {

    if (!message) {
      reject('Error: message is undefined');
      return;
    }
    if(!time) {
      reject('Error: time is undefined');
      return;
    }

    setTimeout(() => {
      resolve(message)
    }, time);

  });

}

const promises = ['primeiro valor', waitThere('promise 1', 3000), waitThere(1000, 1000), waitThere('promise 2', 500), waitThere('promise 3', 1000), 'outro valor'];

Promise.all(promises).then((res) => console.log(res)).catch((err) => console.log('ERRO!', err));

Promise.race(promises);

function downloadPage(inCache) {

  if(inCache) {
    return Promise.resolve('Página em cache');
  } else {
    return waitThere('baixei a pagina', 5000);
  }
}

downloadPage(inCache).then(msg => console.log(msg)).err(err => console.log('ERRO!', err));


```

## Async e Await

- Forma de executar `promises` de forma síncrona;

```js

function waitThere(message, time) {

  return new Promise((resolve, reject) => {

    if (!message) {
      reject('Error: message is undefined');
      return;
    }
    if(!time) {
      reject('Error: time is undefined');
      return;
    }

    setTimeout(() => {
      resolve(message)
    }, time);

  });

}

// simular sincronismo:
// waitThere('Fase 1', 3000).then(val => {
//   console.log(val)
//   waitThere('Fase 2', 1000);
// }).then(fase => {
//   console.log(fase);
//   waitThere('Fase 3', 500);
// }).then(fase => {
//   console.log(fase);
// }).catch(e => console.log('ERRO!', e));

async function execute() {
  try {
    const fase1 = await waitThere('Fase 1', 3000);
    console.log(fase1);

    const fase2 = await waitThere('Fase 2', 1000);
    console.log(fase2);

    const fase3 = await waitThere('Fase 3', 500);
    console.log(fase3);
  } catch (e) {
    console.log('ERRO!', e);
  }
}

```

## AJAX (Asynchronous JavaScript + XML) - XMLHttpRequest (Get) e Promises

- `XMLHttpRequest` é uma API do JavaScript que permite fazer requisições HTTP;

[Documentação](https://www.w3schools.com/js/js_ajax_intro.asp). 
[Pasta com exemplo](/curso-js-ts/sec-8-assincrono/ajax/);

## Fetch API (Get)

- API do JavaScript que permite fazer requisições HTTP;

```js

```

## Fetch API e Axios (JSON)

- `Axios` é uma biblioteca que permite fazer requisições HTTP;

```js

```