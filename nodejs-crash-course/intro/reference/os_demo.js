const os = require("os");

// Plataforma
console.log(os.platform());

// Arquitetura da CPU
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Memória disponível
console.log(os.freemem());

// Memória total
console.log(os.totalmem());

// Diretório Home
console.log(os.homedir());

// Tempo ligado
console.log(os.uptime());
