const { rolesController } = require("../controllers");

const role = require("express").Router();

role.get("/", rolesController.getAll);

role.get("/:id", rolesController.getRole);

role.post("/", rolesController.addRole);

role.put("/:id", rolesController.updateRole);

role.delete("/:id", rolesController.deleteRole);

module.exports = role;
