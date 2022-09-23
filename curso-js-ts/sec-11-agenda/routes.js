const express = require("express");
const route = express.Router();
const HomeController = require("./src/controllers/HomeController");
const LoginController = require("./src/controllers/LoginController");
const ContactController = require("./src/controllers/ContactController");

const { loginRequired } = require("./src/middlewares/middleware");

// Rotas da home
route.get("/", HomeController.index);

// Rotas de Login
route.get("/login/index", LoginController.index);
route.post("/login", LoginController.login);
route.get("/logout", LoginController.logout);
route.post("/login/create-account", LoginController.createAccount);

// Rotas de contato
route.get("/contact/form/", loginRequired, ContactController.index);
route.get("/contact/form/:id", loginRequired, ContactController.editIndex);
route.post("/contact/create", loginRequired, ContactController.create);

module.exports = route;
