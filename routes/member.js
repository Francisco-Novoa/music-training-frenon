const { membersController } = require("../controllers");

const member = require("express").Router();

member.get("/", membersController.getAll);

member.get("/:id", membersController.getMember);

member.post("/", membersController.addMember);

member.put("/:id", membersController.updateMember);

member.delete("/:id", membersController.deleteMember);

module.exports = member;
