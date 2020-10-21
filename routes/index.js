const express = require("express");
const Router = express.Router();
const album = require("./album");
const member = require("./member");
const artist = require("./artist");




Router.use("/albums", album);
Router.use("/members", member);
Router.use("/artists", artist);


module.exports = Router;
