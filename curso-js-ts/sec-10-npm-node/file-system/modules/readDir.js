const fs = require('fs').promises;
const path = require('path');

async function readDirectory(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);

  const files = await fs.readdir(rootDir); // le os arquivos apenas nessa pasta
  
  try {
    walk(files, rootDir);
  } catch(e) {
    console.log(e);
  };
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);
    
    if(/\.git/g.test(fileFullPath) || /node_modules/g.test(fileFullPath)) continue;

    if (file, stats.isDirectory()) {
      readDirectory(fileFullPath);
    }

    if (!/\.css$/g.test(fileFullPath)) continue;

    console.log(fileFullPath);
  }
}

readDirectory('C:\\Users\\isado\\Documents\\Projetos\\aprendendo_js\\curso-js-ts\\');

