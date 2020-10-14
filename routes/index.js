const express = require("express")
const Router = express.Router()
const task = require('./task')
Router.use("/tasks", task)

module.exports = Router