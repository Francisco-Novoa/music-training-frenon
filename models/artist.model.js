const mongoose = require("mongoose");

const artist = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
  },
  country: {
    type: String,
    required: true,
  },
  members: {
      type: mongoose.Schema.Types.ObjectId, ref: "Member",
  },
  albums:{
    type: mongoose.Schema.Types.ObjectId, ref: "Album",
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

const Artist = mongoose.model("Artist", artist);

module.exports = Artist;
