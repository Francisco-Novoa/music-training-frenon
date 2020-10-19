const mongoose = require("mongoose");

const album = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
  },
  country: {
    type: String,
    unique: true,
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

const Album = mongoose.model("Album", album);

module.exports = Album;
