const express = require("express");
const Router = express.Router();
const album = require("./album");
const member = require("./member");
const artist = require("./artist");
const user = require("./users");

Router.use("/albums", album);
Router.use("/members", member);
Router.use("/artists", artist);
Router.use("/user", user);

module.exports = Router;
