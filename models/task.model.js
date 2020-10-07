const mongoose = require("mongoose");

const task = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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

const Task = mongoose.model("Taks", task);

module.exports = Task;
