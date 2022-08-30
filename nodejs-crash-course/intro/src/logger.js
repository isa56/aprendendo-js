const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

// Em outro arquivo, importe o módulo:
// const Logger = require("./src/logger.js");
// const logger = new Logger();
// logger.on("message", (data) => console.log("Chamou Listener:", data));
// logger.log("Hello World");
// logger.log("Olá Mundo");