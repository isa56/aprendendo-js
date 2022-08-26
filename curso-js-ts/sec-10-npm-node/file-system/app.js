const path = require("path");

const writeFile = require('./modules/writeFile');
const readFile = require('./modules/readFile');

const filePath = path.resolve(__dirname, "test.txt");

const people = [{ name: "Isa" }, { name: "Davi" }, { name: "Evy" }];

writeFile(JSON.stringify(people, "", 2), filePath);

async function read(p) {
  const data = await readFile(p);
  return JSON.parse(data);
}

read(filePath).then(data => console.log(data));