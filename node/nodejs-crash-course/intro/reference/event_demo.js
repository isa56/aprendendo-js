const EventEmitter = require('events');

// Cria classe
class meuEmitidor extends EventEmitter {

}

// Inicializa objeto
const meuEmitidor = new meuEmitidor();

// Cria listener de evento
meuEmitidor.on('evento', () => console.log('Evento acionado!'));

// Inicia evento
meuEmitidor.emit('evento');

// Cria listener de evento com parâmetro
meuEmitidor.on('evento', (msg) => console.log('Evento acionado!', msg));
