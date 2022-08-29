require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const { global } = require("./src/middlewares/middleware");
const routes = require("./routes");

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DBCONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
  app.emit("ready");
}).catch(e => console.log("ERRO: ", e));

// Configure Express
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(global);
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views")); // determina o caminho para as views
app.set("view engine", "ejs"); // determina o motor de renderização

app.on("ready", () => {
  app.listen(3000, () =>
    console.log("Server is running @ http://localhost:3000")
  );
});
