require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const csrf = require("csurf");

const mongoose = require("mongoose");

// usando sessões:
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flashMessages = require("connect-flash");

const { global, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware");
const routes = require("./routes");

const app = express();

// Configure Session
const sessionOptions = session({
  secret: "as231d%$##@af879zxcv54_)*(!aa",
  store: MongoStore.create({ mongoUrl: process.env.DBCONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em ms
    httpOnly: true,
  },
});

// Connect to MongoDB
mongoose
  .connect(process.env.DBCONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.emit("ready");
  })
  .catch((e) => console.log("ERRO: ", e));


// Configure Express
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(flashMessages());

app.use(global);
app.use(sessionOptions);

app.use(csrf()); // middleware de proteção contra CSRF
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);


// Configure Helmet (segurança)
// app.use(helmet());

app.set("views", path.resolve(__dirname, "src", "views")); // determina o caminho para as views
app.set("view engine", "ejs"); // determina o motor de renderização

app.on("ready", () => {
  app.listen(3000, () =>
    console.log("Server is running @ http://localhost:3000")
  );
});
