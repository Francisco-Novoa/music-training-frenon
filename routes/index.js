const express = require("express");
const Router = express.Router();
const task = require("./task");
const user = require("./user");

Router.use("/tasks", task);
Router.use("/users", user);

module.exports = Router;
