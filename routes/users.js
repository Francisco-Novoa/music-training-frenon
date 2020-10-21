const { usersControllers } = require("../controllers");

const user = require("express").Router();

user.get("/", usersControllers.getAll);

user.get("/:id", usersControllers.getUser);

user.post("/", usersControllers.addUser);

user.put("/:id", usersControllers.updateUser);

user.delete("/:id", usersControllers.deleteUser);

user.post("/", usersControllers.deleteUser);

module.exports = user;
