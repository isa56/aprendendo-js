const fs = require("fs").promises;

module.exports = function (obj, filePath) {
  fs.writeFile(filePath, obj + "\n", { flag: "w", encoding: "utf8" }); // w to write, a to append
}

