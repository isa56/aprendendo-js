const express = require('express');
const route = express.Router();
const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');

// Rotas da home
route.get('/', HomeController.index);

// Rotas de Login
route.get('/login/index', LoginController.index);



module.exports = route;
