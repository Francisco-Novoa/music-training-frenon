const { tasksController } = require("../controllers");

const task = require("express").Router();

task.get("/", tasksController.getAll);

task.get("/:id", tasksController.getTask);

task.post("/", tasksController.addTask);

task.put("/:id", tasksController.updateTask);

task.delete("/:id", tasksController.deleteTask);

module.exports = task;
