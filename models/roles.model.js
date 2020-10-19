const mongoose = require("mongoose");

const role = mongoose.Schema({
  kind: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  modifiedAt: {
    type: Date,
    default: new Date(),
  },
});

const Role = mongoose.model("Role", role);

module.exports = Role;
