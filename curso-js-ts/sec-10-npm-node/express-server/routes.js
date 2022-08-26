const express = require("express");

const HomeController = require("./controllers/HomeController");
const ContactController = require("./controllers/ContactController");

const route = express.Router();

route.get("/", HomeController.index);

route.get("/contato", ContactController.index);

route.post("/contato/:parameters?", ContactController.formSent);

module.exports = route;