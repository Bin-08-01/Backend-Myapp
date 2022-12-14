const UserController = require("../Controllers/UserController");
const MiddlewareController = require("../Controllers/MiddlewareController");
const route = require('express').Router();

route.get('/all', UserController.getAllUser);

route.delete('/delete/:id', UserController.deleteUser);

module.exports = route;
