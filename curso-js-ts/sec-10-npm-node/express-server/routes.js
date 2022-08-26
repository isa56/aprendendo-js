const express = require("express");

const HomeController = require("./src/controllers/HomeController");

const route = express.Router();

route.get("/", HomeController.index);

route.post("/:parameters?", HomeController.formSent);

module.exports = route;