const express = require("express");

const HomeController = require("./src/controllers/HomeController");

const {firstMiddleware} = require("./src/middlewares/middleware");

const route = express.Router();


route.get("/", firstMiddleware, HomeController.index);

route.post("/:parameters?", HomeController.formSent);

module.exports = route;