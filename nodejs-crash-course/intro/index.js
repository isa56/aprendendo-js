const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

function serveHtml(req, res) {
  switch (req.url) {
    case "/":
      fs.readFile(
        path.join(__dirname, "public", "index.html"),
        (err, content) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content);
        }
      );
      break;
    case "/about":
      fs.readFile(
        path.join(__dirname, "public", "about.html"),
        (err, content) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content);
        }
      );
      break;
    default:
      fs.readFile(
        path.join(__dirname, "public", "404.html"),
        (err, content) => {
          if (err) throw err;
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content);
        }
      );
      break;
  }
}

function serveJson(req, res) {
  switch (req.url) {
    case "/api/users":
      const users = [
        { name: "Bob Smith", age: 40 },
        { name: "John Doe", age: 30 },
        { name: "Jane Doe", age: 20 },
        { name: "Mary Smith", age: 50 },
      ];
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
      break;
    case "/api/tasks":
      const tasks = [
        { id: 1, text: "Doctors Appointment", day: "Feb 5th at 2:30pm" },
        { id: 2, text: "Meeting at School", day: "Feb 6th at 1:30pm" },
        { id: 3, text: "Food Shopping", day: "Feb 5th at 2:30pm" },
        { id: 4, text: "Clean House", day: "Feb 5th at 2:30pm" },
        { id: 5, text: "Study JS", day: "Feb 5th at 2:30pm" },
      ];
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(tasks));
      break;
  }
}


const server = http.createServer((req, res) => {

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extName = path.extname(filePath);

  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {

      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }

    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));
