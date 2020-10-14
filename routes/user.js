const { usersController } = require("../controllers");

const user = require("express").Router();

user.get("/", usersController.getAll);

user.get("/:id", usersController.getUser);

user.post("/", usersController.addUser);

user.put("/:id", usersController.updateUser);

user.delete("/:id", usersController.deleteUser);

module.exports = user;
