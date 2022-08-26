const express = require("express");
const path = require("path");

const routes = require("./routes");
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views")); // determina o caminho para as views
app.set("view engine", "ejs"); // determina o motor de renderização

app.listen(3000, () =>
  console.log("Server is running @ http://localhost:3000")
);
